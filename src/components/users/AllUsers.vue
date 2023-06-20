<script setup>
import { mapGetters } from 'vuex'
import UserItem from './UserItem.vue'
import ToDoes from '../Todoes.vue'
import EditUser from './EditUser.vue'
import DeleteUser from './DeleteUser.vue'
</script>

<template>
  <div class="card">
    <div class="card-header"><i class="bi bi-people-fill"></i> All Users</div>
    <div class="card-body">
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th class="text-center" style="width:80px;">ToDos</th>
                    <th class="text-center" style="width:80px;">Edit</th>
                    <th class="text-center" style="width:80px;">Delete</th>
                </tr>
            </thead>
            <tbody>
              <UserItem  v-for="(user, i) in getALLUsers" :key="i" 
                :user="user" 
                :editUser="editUser"  
                :deleteUser="deleteUser"
                :showToDoes="showToDoes"/>
            </tbody>
        </table>
    </div>
    <div class="card-footer">

    </div>
  </div>
    <EditUser v-if="popupType == 'edit'" :user_id="user_id" :cancel = "cancel"/>
    <DeleteUser v-if="popupType == 'delete'" :user_id="user_id" :cancel = "cancel"/>
    <ToDoes v-if="popupType == 'todoes'" :user_id="user_id" :cancel = "cancel"/>
</template>
<script>
  export default {
    data(){
      return {
        popupType:null,
        user_id:null,
      }
    },
    methods:{
      editUser(user_id){
         this.popupType = 'edit'
         this.user_id = user_id
      },
      deleteUser(user_id){
         this.popupType = 'delete'
         this.user_id = user_id
      },
      showToDoes(user_id){
         this.popupType = 'todoes'
         this.user_id = user_id
      },
      cancel(){
        this.user_id = null
        this.popupType = null
      }
    },
    computed: {
        ...mapGetters([
          'getALLUsers'
        ])
    }
  }
</script>
