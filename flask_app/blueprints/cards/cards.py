import random

class Deck(object):
    _suits = ['Club', 'Diamond', 'Heart', 'Spade']
    _faces = list(range(2, 11)) + ['Jack', 'Queen', 'King', 'Ace']
    def __init__(self):
        self.available = self.allCards
        self.discarded = []
        # any good dealer would shuffle at least 3 times right???
        self.shuffle(3)

    @property
    def allCards(self):
       return [
           { 
               "suit": suit, 
               "value": face, 
               "type": "pip" if isinstance(face, int) else "face",
               "low": i+2 if face != "Ace" else 1, 
               "high": i+2,
               "color": "red" if suit in ['Heart', 'Diamond'] else "black"
            } 
            for (i, face) in enumerate(self._faces) 
            for suit in self._suits
        ]

    def shuffle(self, times=3):
        for i in range(times):
            random.shuffle(self.available)
        return self.available
        
    
    def deal(self, n=1):
        if not self.available:
            raise RuntimeError("No cards left in deck, please create a new one")
        hand = []
        if n > 52:
            n = 52
        for i in range(n):
            if self.available:
                card = self.available[random.randint(0, len(self.available)-1)]
                hand.append(card)
                self.discarded.append(card)
                self.available.remove(card)
        return hand

    def __len__(self):
        return len(self.available)

    def __repr__(self):
        return '<Deck ({}) cards left>'.format(len(self))


