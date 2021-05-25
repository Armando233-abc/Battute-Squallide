import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            buttons: [
                {
                  id: 'normal_jokes',
                  title: 'Battute Squallide'
                },
                {
                  id: 'black_jokes',
                  title: 'Black Humor'
                },
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