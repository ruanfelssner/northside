<template>
    <div class="container flex flex-col justify-center items-center w-full">
      <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1 flex flex-col items-start justify-center">
            <h1 class="mb-4">Serviços <br />oferecidos</h1>
            <ul class="p-0 list-disc">
              <li class="text-xl font-bold" v-for="(item, id) of listServices" :key="'list'+id">{{ item }}</li>
            </ul>
          </div>
          <div class="col-span-1 flex flex-col justify-center">
            <img src="/assets/img/servicos.png" alt="">
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

const listServices = [
  'Captação de Vídeos em 4k Audiovisual',
  'Captação com Drone DJI AVATA FPV em 4k',
  'Edição de Vídeos e fotos',
  'Fotos',
  'Gravação de Podcasts',
  'Elaboração de Criativos'
]
</script>