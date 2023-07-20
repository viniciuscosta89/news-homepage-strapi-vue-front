<script setup lang="ts">
  import { RouterView } from 'vue-router/auto'
  import Header from './components/Header/Header.vue'
</script>

<template>
  <Header />

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>