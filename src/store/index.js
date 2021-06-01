import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            buttons: [
                {
<<<<<<< HEAD
                  id: 'normal_jokes',
                  title: 'Battute Squallide'
=======
                  id: 'puns_jokes',
                  title: 'Freddure'
>>>>>>> 8f8e4051017961558b87210f9270ed477ee4e8ba
                },
                {
                  id: 'black_jokes',
                  title: 'Black Humor'
<<<<<<< HEAD
                },
=======
                }
>>>>>>> 8f8e4051017961558b87210f9270ed477ee4e8ba
            ]
        }
    },
   getters: {
       buttons(state){
           return state.buttons
       },
       button(state){
            return (buttonId)=>{
                return state.buttons.find(button => button.id === buttonId)
            }
       }
   }
})

export default store