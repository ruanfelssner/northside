<template>
  <full class="bg-primary text-secondary">
    <div class="w-[200px] h-[3px] bg-secondary top-10 absolute aside-bars" />
    <div class="w-[300px] h-[70px] bg-secondary top-auto absolute content-bars" />
    <div class="container flex flex-col justify-center items-center w-full">
      <h1>NORTHSIDE</h1>
      <h2>Produção Audiovisual</h2>
    </div>
    <div class="w-[300px] h-[70px] bg-secondary right-0 top-auto absolute content-bars" />
    <div class="w-[200px] h-[3px] bg-secondary right-0 bottom-10 absolute aside-bars" />
  </full>
</template>

<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
  gsap.to('.aside-bars', { width: "70vw", height:15, duration: 1.5 })
  gsap.to('.content-bars', { width: "10vw", duration: 2 })
  gsap.from('h1', { x: -200, opacity: 0, rotate:360, duration:1 })
  gsap.from('h2', { x: 200, opacity: 0, duration: 1.2 })
})
</script>