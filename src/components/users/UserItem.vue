<script setup>
   defineProps(['user', 'editUser','deleteUser','showToDoes'])
</script>
<template>
    <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td class="text-center">
            <button v-on:click="showToDoes(user.id)" class="btn btn-link text-primary">
                <i class="bi bi-card-checklist"></i>
            </button>
        </td>
        <td class="text-center">
            <button v-on:click="editUser(user.id)" class="btn btn-link text-primary">
                <i class="bi bi-pencil-square"></i>
            </button>
        </td>
        <td class="text-center">
            <button v-on:click="deleteUser(user.id)" class="btn btn-link text-danger">
                <i class="bi bi-trash-fill"></i>
            </button>
        </td>
    </tr>
</template>