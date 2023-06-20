<script setup>
    import { ref } from 'vue'

    import { mapGetters, mapMutations } from 'vuex'
    import Popup from '../Popup.vue';
    defineProps(['payment_id', 'cancel'])
</script>
<template>
    <Popup :cancel="cancel">
       <template #header>Payment Details</template>
       <template #body ref="toPrint">
           <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                    <h1>Invoice</h1>
                    <p>Invoice # <strong>{{ payment.id }}</strong></p>
                    <p>Invoice Amount  <strong>${{ payment.amount }} (usd)</strong></p>
                    <p>Customer ID  <strong>{{ payment.by }}</strong></p>
                    <p>Date  <strong>{{ payment.date }}</strong></p>
                </div>
           </div>
           <div class="row border-top pt-3">
                <div class="col-md-6">
                    <h4>Billed By</h4>
                    <p>Name  <strong>{{ parseUser(payment.by) }}</strong></p>
                    <p>Address  <strong>{{ payment.address }}</strong></p>
                </div>
                <div class="col-md-6"></div>
           </div>
           <div class="row border-top pt-3">
                <div class="col-md-6">
                    <h4>Description</h4>
                   
                </div>
                <div class="col-md-6">
                    <p>{{ payment.description }}</p>
                </div>
           </div>
           <div class="row border-top pt-3">
                <div class="col-md-6">
                    <h4>{{ payment.title }}</h4>
                   
                </div>
                <div class="col-md-6">
                    <p class="text-end"><strong>${{ payment.amount }} (usd)</strong></p>
                </div>
           </div>
           <div class="row  pt-3">
                <div class="col-md-6">
                   
                   
                </div>
                <div class="col-md-6 border-top">
                    <p class="text-end">Total <strong>${{ payment.amount }} (usd)</strong></p>
                </div>
           </div>

       </template>
        <template  #footer>
           
        </template>
    </Popup>
</template>
<script>
    export default {
        data(){
            return {
               payment:{
                    id:null, 
                    title:null,
                    description:null, 
                    address:null, 
                    by:null, 
                    amount:null,
                    date:null
                }
            }
        },
        mounted(){
           
            this.payment = this.getPaymentById(this.payment_id)
        },
        computed: {
            ...mapGetters([
                'getUserById',
                'getPaymentById'
            ])
        },
        methods:{
            parseUser(id){
                if(id){
                    const user = this.getUserById(id)
                    if(user){
                        return user.name
                    }
                }
               return null
            },
            ...mapMutations([
                'updateUser',
                'deleteUser'
            ]),
            
        }
    }
</script>