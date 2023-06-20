<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <header >
    <Header />
  </header>
  <main class="container mt-5">
    <RouterView />
  </main>
</template>
