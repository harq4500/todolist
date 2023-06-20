import {toRaw} from 'vue'

export default {
    state:{
        todos:[
            {id:1, title:"Task 1",description:"Some description goes here ...", done:false, by:null},
            {id:2, title:"Task 2",description:"Some description goes here ...", done:false, by:null},
            {id:3, title:"Task 3",description:"Some description goes here ...", done:true, by:1},
            {id:4, title:"Task 4",description:"Some description goes here ...", done:false, by:null},
            {id:5, title:"Task 5",description:"Some description goes here ...", done:false, by:null}
        ]
    },
    getters:{
        getALLToDos: (state) =>{
            return toRaw(state.todos)
        }
    },
    mutations:{
        done:(state, data)=>{
            state.todos = state.todos.map((todo) => {
                if(todo.id == data.id){
                   todo.by = data.by
                   todo.done = data.done
                }
                return todo
            })
        },
    }
}