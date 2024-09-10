<template>
  <header class="fixed z-10 right-10 top-10 py-5 bg-secondary text-primary">
    <div class="container">
      <div class="navbar flex justify-between">
      <div class="navbar-brand">
        logo
        <button>
          <barsIcon />
        </button>
      </div>
        <nav class="flex gap-4 hidden">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/sobre">Sobre</NuxtLink>
          <NuxtLink to="/contato">Contato</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
  <main class="relative z-0">    
    <full class="bg-primary text-secondary" id="oi">
      <div class="w-[200px] h-[3px] bg-secondary top-10 absolute aside-bars" />
      <slot />    
      <div class="w-[200px] h-[3px] bg-secondary right-0 bottom-10 absolute aside-bars" />
    </full>
  </main>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import barsIcon from '../assets/icons/bars.svg?component'

onMounted(() => {
  gsap.to('.aside-bars', { width: "70vw", duration: 1.5 })
})
</script>