<script setup>
    defineProps(['cancel'])
</script>
<template>
    <div class="popup-bg"></div>
    <div class="card  popup">
        <div class="card-header bg-primary text-white">
            <slot name="header"></slot>
            <button v-on:click="cancel" class="btn btn-link text-white float-end"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body bg-light">
            <slot name="body"></slot>
        </div>
        <div class="card-footer">
            <button v-on:click="cancel" class="btn btn-secondary text-white float-start" >Cancel</button>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<style scoped>
    .popup-bg{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:rgba(108,117,125,0.6);
    }
    .popup{
        position:fixed;
        top:10%;
        right:0;
        left:0;
        width:50%;
        height:fit-content;
        margin:auto;
    }
</style>