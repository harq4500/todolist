<script setup>
    import { mapGetters } from 'vuex'
    defineProps(['payment', 'showDetails'])
</script>
<template>
    <tr>
        <td>{{ payment.title }}</td>
        <td>{{ parseUser(payment.by) }}</td>
        <td>{{ payment.date }}</td>
        <td class="text-center">
            <button v-on:click="showDetails(payment.id)"  class="btn btn-link text-primary">
                <i class="bi bi-credit-card-2-front"></i>
            </button>
        </td>
    </tr>
   
</template>
<script>
    export default {
        methods:{
            parseUser(id){
                if(id){
                    const user = this.getUserById(id)
                    if(user){
                        return user.name
                    }
                }
               return null
            }
        },
        computed: {
            ...mapGetters([
            'getUserById',
            ])
        }
    }
</script>