<script setup>
    import { mapGetters, mapMutations } from 'vuex'
    import Popup from '../Popup.vue';
    defineProps(['user_id', 'cancel'])
</script>
<template>
    <Popup :cancel="cancel">
       <template #header>Edit user</template>
       <template #body>
            <div class="mb-3 mt-3">
                <label for="name" class="form-label">Name:</label>
                <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Name" name="name" required>
                <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
            </div>
            <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input v-model="form.email" type="text" class="form-control" id="email" placeholder="Email" name="email" required>
                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="mb-3 mt-3">
                <label for="phone" class="form-label">Phone:</label>
                <input v-model="form.phone" type="phone" class="form-control" id="phone" placeholder="Phone" name="phone" required>
                <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
            </div>
       </template>
        <template  #footer>
            <button v-on:click="update()" class="btn btn-primary text-white float-end">Update</button>
        </template>
    </Popup>
</template>
<script>
    export default {
        data(){
            return {
                form:{
                    name:null,
                    email:null,
                    phone:null
                },
                errors:{
                    name:null,
                    email:null,
                    phone:null,
                    hasError:false
                }
            }
        },
        mounted(){
           this.parseData(this.getUserById(this.user_id))
        },
        computed: {
            ...mapGetters([
                'getUserById'
            ])
        },
        methods:{
            parseData(user){
                this.form.name = user.name
                this.form.email = user.email
                this.form.phone = user.phone
            },
            update(){
                if(this.validate()){
                    this.updateUser({
                        name: this.form.name,
                        email: this.form.email,
                        phone: this.form.phone,
                        id:this.user_id
                    })
                    this.cancel()
                }
            },
            validate(){
                this.errors = {
                    name:null,
                    email:null,
                    phone:null,
                    hasError: false
                }
                // Check if fields are not empty
                for(const item in this.form){
                    if(this.form[item] == ""){
                        this.errors[item] = "Field is required"
                        this.errors.hasError = true
                    }
                }

                //Checking if email is valid
                if(this.form.email != "" && !this.form.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                    this.errors.email = "Must be a valid email address"
                    this.errors.hasError = true
                }
                //Checking if phone is valid
                if(this.form.phone != "" && !this.form.phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)){
                    this.errors.phone = "Must be a valid phone number"
                    this.errors.hasError = true
                }

                return !this.errors.hasError
            },
            ...mapMutations([
                'updateUser',
                'deleteUser'
            ]),
            
        }
    }
</script>