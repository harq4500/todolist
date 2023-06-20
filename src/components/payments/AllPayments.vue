<script setup>
import { mapGetters } from 'vuex'
import PaymentItem from './PaymentItem.vue'
import PaymentDetails from './PaymentDetails.vue';
</script>
<template>
<div class="card">
    <div class="card-header"> All payments</div>
    <div class="card-body">
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>By</th>
                    <th>Date</th>
                    <th class="text-center" style="width:80px;">Watch</th>
                </tr>
            </thead>
            <tbody>
                <PaymentItem v-for="payment in getALLPayments" :key="payment.id" :payment="payment" :showDetails = "showDetails"/>
            </tbody>
        </table>
    </div>
    <div class="card-footer">

    </div>
  </div>
   <PaymentDetails v-if="payment_id" :payment_id="payment_id" :cancel="cancel"/>
</template>
<script>
    export default {
        data(){
            return {
                payment_id:null,
            }
        },
        methods:{
            showDetails(id){
                this.payment_id = id
            },
            cancel(){
                this.payment_id = null
            }
        },
        computed: {
            ...mapGetters([
            'getALLPayments',
            ])
        }
    }
</script>