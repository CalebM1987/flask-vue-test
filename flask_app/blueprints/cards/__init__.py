from flask import Blueprint, jsonify, request
from uuid import uuid4
from functools import wraps
from .cards import Deck

card_api = Blueprint('card_api', __name__)

class Dealer(object):
    _cookie = 'card-player_z'
    def __init__(self):
        self.players = {}

    def get_active_deck(self):
        """gets an active deck from a cookie. If no cookie, a new deck is generated

        Returns:
            tuple: returns a tuple of a Deck() instance, playerId, and boolean based on whether or not it is a new player
        """
        playerId = request.cookies.get(self._cookie) or request.args.get('token') or request.form.get('token') or request.headers.get('CARD-PLAYER-ID')
        deck = self.players.get(playerId)
        shouldSetCookie = not playerId
        if not deck:
            deck, playerId = self.set_active_deck(playerId)
        return deck, playerId, shouldSetCookie 

    def set_active_deck(self, playerId=None):
        if not playerId:
            playerId = '{}-{}'.format(len(self.players) + 1, uuid4())
        deck = Deck()
        self.players[playerId] = deck
        return deck, playerId

    def deal_new_deck(self, playerId):
        newDeck = Deck()
        self.players[playerId] = newDeck
        return newDeck

    def set_player_cookie(self, response, playerId):
        response.set_cookie(
            self._cookie,
            value=playerId,
        )


dealer = Dealer()

@card_api.route('/api/cards/dealer/deal/<int:n>')
def dummyData(n):
    deck, playerId, shouldSetCookie = dealer.get_active_deck()
    try:
        hand = deck.deal(n or 1)
        resp = jsonify({ "isNewDeck": False, "hand": hand, "count": len(hand), "deckCount": len(deck) })
    except:
        deck = dealer.deal_new_deck(playerId)
        hand = deck.deal(n or 1)
        resp = jsonify({ "isNewDeck": True, "hand": hand, "count": len(hand), "deckCount": len(deck) })
    
    if shouldSetCookie:
        dealer.set_player_cookie(resp, playerId)

    return resp

@card_api.route('/api/cards/deck')
def get_deck():
    deck, playerId, shouldSetCookie = dealer.get_active_deck()
    payload = { "cards": deck.available, "count": len(deck) }
    
    if shouldSetCookie:
        payload['token'] = playerId
        resp = jsonify(payload)
        dealer.set_player_cookie(resp, playerId)
        return resp

    return jsonify(payload)

@card_api.route('/api/cards/dealer/deck/shuffle', methods=['PUT'])
def shuffle_deck():
    deck, playerId, shouldSetCookie = dealer.get_active_deck()
    resp = jsonify({ "cards": deck.shuffle(1), "count": len(deck)})

    if shouldSetCookie:
        dealer.set_player_cookie(resp, playerId)

    return resp

@card_api.route('/api/cards/dealer/players')
def get_players():
    return jsonify({ "players": list(dealer.players.keys()) })

