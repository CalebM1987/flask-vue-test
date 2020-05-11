<template>
  <b-container class="dealer" fluid>
    
    <b-row>
      <b-col>
        <h3>Cards in Deck <a href="#" @click="peek = !peek" title="peek at the dealer's deck"><small>({{ deckCount }})</small></a> </h3>
        <div class="d-flex justify-content-center mt-3 mb-2">
          <b-form-spinbutton min="1" :max="Math.min(7, deckCount)" v-model="handSize" style="max-width: 160px;"></b-form-spinbutton>
          <b-button class="ml-4 mr-4" @click="dealHand">Deal Hand</b-button>
          <b-button @click="shuffleDeck">Shuffle Deck</b-button>
        </div>
        <b-spinner variant="secondary" v-if="state == 'busy'" class="m-3 mx-auto"></b-spinner>
      </b-col>
    </b-row>

    <b-row style="min-height: 50vh;">
      <b-col>
        <hr>
          <h4 class="mt-3"><b>Your Hand</b></h4>
          <transition name="bounce-right" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" > 
          
            <card-hand :hand="hand" v-if="hand.length">
              <template slot-scope="card">
                <div class="mx-auto">
                  <playing-card :card="card" class="text-center">
                    <p v-html="getCardUnicode(card)" :style="`color: ${card.color}; font-size: 12rem;`"></p>
                  </playing-card>
                  <div style="margin-top: -4rem;" class="text-center">
                    <b>{{ card.value }}</b> of <b :style="`color: ${card.color}`">{{ card.suit}}s</b>
                  </div>
                </div>
              </template>
            </card-hand>
         
        </transition>

        <b-alert :show="state === 'idle' && !hand.length" class="my-auto" variant="warning">
          You do not have any cards in your hand, set the number of cards you want and click the <a href="#" @click="dealHand">Deal Hand</a> button to get your cards.  If you are feeling like the dealer didn't shuffle very well, click the <a href="#" @click="shuffleDeck">Shuffle Deck</a> button to make the dealer reshuffle the cards.
        </b-alert>
        
      </b-col>
    </b-row>

    <!-- peek at cards modal -->
    <b-modal title="Peek at the Cards in the Deck" v-model="peek" size="lg">
      <b-container class="deck-preview">
        <card-hand :hand="deck">
          <template slot-scope="card">
            <div class="mx-auto">
              <playing-card :card="card" class="text-center">
                <p v-html="getCardUnicode(card)" :style="`color: ${card.color}; font-size: 12rem;`"></p>
              </playing-card>
              <div style="margin-top: -4rem;" class="text-center">
                <b>{{ card.value }}</b> of <b :style="`color: ${card.color}`">{{ card.suit}}s</b>
              </div>
            </div>
          </template>
        </card-hand>
      </b-container>

    </b-modal>

  </b-container>
</template>

<script>

  import { cardUnicodes } from '@/data/cards'

  const delay = ms => new Promise(res => setTimeout(res, ms))

  export default {
    name: 'dealer',

    components: {
      CardHand: ()=> import('./CardHand'),
      PlayingCard: ()=> import('./PlayingCard')
    },

    data(){
      return {
        peek: false,
        handSize: 5,
        hand: [],
        deckCount: 52,
        deck: [],
        isNewDeck: false,
        state: 'idle',
        cards: cardUnicodes
      }
    },

    async mounted(){
      this.state = 'busy'
      const { cards, count } = await this.$flask.getDeck()
      this.state = 'idle'
      this.deck = cards
      this.deckCount = count
    },

    computed: {
      cardIndices(){
        const suits = ['Spade', 'Heart', 'Diamond', 'Club']
        const order = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
        const indices = []
        for (const suit of suits){
          indices.push(...order.map(o => { return {suit, value: o } }))
        }
        return indices
      }
    },

    methods: {
      getCardUnicode({ suit, value }){
        const item = this.cardIndices.find(i => i.suit === suit && i.value == value)
        return this.cards[this.cardIndices.indexOf(item)]
      },

      async dealHand(){
        // clear list first to trigger transition
        this.hand = []
        this.state = 'busy'

        // add a small delay to allow the transition-out to finish
        await delay(250)

        // fetch cards
        const { hand, isNewDeck }= await this.$flask.dealHand(this.handSize)
        const { cards, count } = await this.$flask.getDeck()
        this.state = 'idle'
        this.deck = cards
        this.deckCount = count
        this.hand = hand

        // alert user that the dealer has started a new deck
        if (isNewDeck || count == 0){
          this.$bvToast.toast("You have gone through an entire deck, the dealer just grabbed another deck.  If you're feeling unlucky with cards you are getting, request the dealer to shuffle the deck by clicking on the \"Shuffle Deck\" button." , {
            title: 'New Deck Alert',
            variant: 'warning',
            autoHideDelay: 10000
          })
        }
      },

      async shuffleDeck(){
        this.state = 'busy'
        const { cards, count } = await this.$flask.shuffleDeck()
        this.deckCount = count
        this.deck = cards
        this.state = 'idle'
      }
    }

  }

</script>

<style>
  @import url(https://cdn.jsdelivr.net/npm/animate.css@3.5.1); 

  .deck-preview {
    max-height: calc(75vh);
    overflow-y: auto;
  }

</style>