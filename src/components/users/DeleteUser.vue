<script setup>
    import { mapGetters, mapMutations } from 'vuex'
    import Popup from '../Popup.vue';
    defineProps(['user_id', 'cancel'])
</script>
<template>
    <Popup :cancel="cancel">
       <template #header>Delete user</template>
       <template #body>
            <h1 class="text-center text-warning"><i class="bi bi-exclamation-square"></i></h1>
           <h2 class="text-center">Are you sure you want to delete the user?</h2>
           
           <h1 class="text-center">{{ user.name }}</h1>
       </template>
        <template  #footer>
            <button v-on:click="remove()" class="btn btn-primary text-white float-end">Delete</button>
        </template>
    </Popup>
</template>
<script>
    export default {
        data(){
            return {
                user:{name:null}
            }
        },
        mounted(){
           this.user = this.getUserById(this.user_id)
        },
        computed: {
            ...mapGetters([
                'getUserById'
            ])
        },
        methods:{
            remove(){
                this.deleteUser(this.user_id)
                this.cancel()
            },
            ...mapMutations([
                'deleteUser'
            ])
        }
    }
</script>