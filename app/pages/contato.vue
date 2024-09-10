<template>
    <div class="container flex flex-col justify-center items-center w-full">
      <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1 flex flex-col items-start justify-center">
            <h1 class="mb-4">Contato</h1>
          </div>
          <div class="col-span-1 flex flex-col justify-center px-6">
            <h2 class="mb-4">RAFAEL BRIDI</h2>
            <h4 class="mb-4">(41) 9 98918728</h4>
            <h4>Instagram</h4>
            <h4>@northsideproducoes</h4>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
  gsap.from('h1', { x: -200, opacity: 0, duration:1 })
  gsap.from('ul', { x: -200, opacity: 0, duration: 1.2 })
})

</script>