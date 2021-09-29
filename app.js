new Vue({
    el: '#app',
    data: {
        selected: 1,
        playerOne: {
            points: 0,
            historic: []

        },
        playerTwo: {
            points: 0,
            historic: []
        },
        cartSelected: 0
        
    },
    methods: {
        changePlayer () {
            this.selected = this.selected == 1 ? 2 : 1

            this.cartSelected = ''
        }, 
        selectedCart (){
            this.cartSelected = Math.floor((Math.random() * 13) +1)


            if (this.selected == 1){
                 this.playerOne.points += this.cartSelected 
                 this.playerOne.historic.push(this.cartSelected)
            }

            if (this.selected == 2) {
                this.playerTwo.points += this.cartSelected
                this.playerTwo.historic.push(this.cartSelected)
            }
            
            if (this.playerOne.points >= 21 ||this.playerTwo.points >= 21 )
                this.finishGame()
        }, 

        finishGame () {
            if (this.playerOne.points <= 21 && this.playerOne.points > this.playerTwo.points)
                alert('Jogador 1 campeão')
            
            else if (this.playerTwo.points <= 21 && this.playerTwo.points > this.playerOne.points)
                alert('Jogador 2 campeão')
            
            else if (this.playerOne.points > 21)
                alert('Jogador 2 campeão')
            else if (this.playerTwo.points > 21)
                alert('Jogador 1 campeão')
            
            else
                alert('Jogadores empataram')
            let vj = this
            setTimeout(function (){
                vj.resetGame()
            }, 3000)
        }, 

        resetGame () {
            this.playerOne.points = 0
            this.playerTwo.points = 0
            this.cartSelected = ''
            this.selected = 1
        }
    },

    computed: {
        numberHistoricPlayerOne (){
            return this.playerOne.historic.length
        },
        numberHistoricPlayerTwo (){
            return this.playerTwo.historic.length
        }
    }
})