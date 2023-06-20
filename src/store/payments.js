import {toRaw} from 'vue'

export default {
    state:{
        payments:[
            {id:1, title:"Charge 1",description:"Some description goes here ...", address:"Any Address 12/6", by:1, amount:100,date:"21/06/2023"},
            {id:2, title:"Charge 2",description:"Some description goes here ...", address:"Any Address 12/6", by:1, amount:100,date:"21/06/2023"},
            {id:3, title:"Subscription 1",description:"Some description goes here ...", address:"Any Address 12/6", by:2, amount:100,date:"21/06/2023"},
            {id:4, title:"Charge 3",description:"Some description goes here ...", address:"Any Address 12/6", by:4, amount:100,date:"21/06/2023"},
            {id:5, title:"Subscription 2",description:"Some description goes here ...", address:"Any Address 12/6", by:8, amount:100,date:"21/06/2023"}
        ]
    },
    getters:{
        getALLPayments: (state) =>{
            return toRaw(state.payments)
        },
        getPaymentById: (state) => (id) => {
            return toRaw(state.payments.find(payments => payments.id === id))
        },
    }
}