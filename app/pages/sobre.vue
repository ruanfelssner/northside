<template>
  <div class="container">
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1 flex flex-col items-center ">
        <img src="/assets/img/sobre.png" alt="">
      </div>
      <div class="col-span-1 flex flex-col justify-center">
        <h1 class="mb-4">Sobre Nós</h1>
        <p>Northside Produções fornece serviços AUDIOVISUAIS de alta qualidade que inspire conteúdo e engaje o público.</p>
        <p>Fazemos isso oferecendo uma ampla gama de soluções, desde a captação de imagens em 4K até a criação de conteúdo criativo e gravação de podcasts.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
  gsap.from('img', { x: -200, opacity: 0, rotate:35,  duration:1 })
  gsap.from('h1', { x: 200, opacity: 0, duration:1 })
  gsap.from('p', { x: 200, opacity: 0, duration: 1.2 })
})
</script>