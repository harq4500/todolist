<script setup>
    import { mapGetters, mapMutations } from 'vuex'
    import Popup from './Popup.vue'
    import TodoItem from './TodoItem.vue'
    defineProps(['user_id', 'cancel'])
</script>
<template>
    <Popup :cancel="cancel">
       <template #header>To Do List</template>
       <template #body>
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Done by</th>
                        <th class="text-center" style="width:80px;">Done</th>
                    </tr>
                </thead>
                <tbody>
                    <TodoItem v-for="todo in getALLToDos" :key="todo.id"
                     :todo="todo"
                     :user_id="user_id"/>
                </tbody>
            </table>
       </template>
        <template  #footer>
            
        </template>
    </Popup>
</template>
<script>
    export default {
        computed: {
            ...mapGetters([
                'getALLToDos'
            ])
        }
    }
</script>