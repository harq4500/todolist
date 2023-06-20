<script setup>
    import { mapGetters, mapMutations } from 'vuex'
    defineProps(['todo','user_id'])
</script>
<template>
    <tr>
        <td>{{ todo.title }}</td>
        <td>{{ todo.description }}</td>
        <td>{{ parseUser(todo.by) }}</td>
        <td class="text-center" style="width:80px;">
            <input v-model="check"  v-on:change="getDone(this)" class="form-check-input" type="checkbox" id="check1" name="option1" value="something">
        </td>
    </tr>
</template>
<script>
    export default {
        data(){
            return {
                check:false
            }
        },
        mounted(){
            this.check = this.todo.done
        },
        methods:{
            getDone(){
               this.done({
                id:this.todo.id,
                by: (this.check ? this.user_id : null),
                done:this.check
               })
            },
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
                'done',
            ]),
        },
        computed: {
            ...mapGetters([
                'getUserById'
            ]),
            
        },
    }
</script>