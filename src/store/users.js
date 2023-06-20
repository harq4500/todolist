import {toRaw} from 'vue'
export default {
    state:{
        users:[
            {id:1, email:"user1@mail.com",name:"Name 1", phone:"+1001122331"},
            {id:2, email:"user2@mail.com",name:"Name 2", phone:"+1001122332"},
            {id:3, email:"user3@mail.com",name:"Name 3", phone:"+1001122333"},
            {id:4, email:"user4@mail.com",name:"Name 4", phone:"+1001122334"},
            {id:5, email:"user5@mail.com",name:"Name 5", phone:"+1001122335"},
            {id:6, email:"user6@mail.com",name:"Name 6", phone:"+1001122336"},
            {id:7, email:"user7@mail.com",name:"Name 7", phone:"+1001122337"},
            {id:8, email:"user8@mail.com",name:"Name 8", phone:"+1001122338"}
        ],
        tasksdone:[]
    },
    getters:{
        getALLUsers: (state) =>{
            return toRaw(state.users)
        },
        getUserById: (state) => (id) => {
            return toRaw(state.users.find(user => user.id === id))
        },
        getTasksDone:(state)=>(id)=>{
            return toRaw(state.tasksdone.find(task => task.user_id === id))
        }
    },
    mutations:{
        updateUser:(state, data)=>{
            state.users = state.users.map((user) => {
                if(user.id == data.id){
                    return data
                }else{
                    return user
                }
            })
        },
        deleteUser:(state, id)=>{

            state.users = state.users.filter(user => user.id != id) 
        }
    }
}