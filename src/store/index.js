import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            buttons: [
                {
                  id: 'puns_jokes',
                  title: 'Freddure'
                },
                {
                  id: 'black_jokes',
                  title: 'Black Humor'
                },
                {
                    id: 'normal_jokes',
                    title: 'Barzellette'
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