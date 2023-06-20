<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-sm bg-light">
        <div class="container">
            <span class="navbar-brand">To Do List</span>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/payments">Payments</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>