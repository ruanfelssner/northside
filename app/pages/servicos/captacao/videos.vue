<template>
      <div class="container">
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1 flex flex-col items-center ">
            <img src="/assets/img/captacao-de-videos.png" alt="" class="rounded-lg">
          </div>
          <div class="col-span-1 flex flex-col justify-center">
            <h1 class="mb-4">Captação de vídeos</h1>
              <ul class="list-disc p-4">
                <li class="text-xl font-bold mb-4">Takes com câmera em 4k selecionando as lentes certas para cada projeto, capturando ângulos e perspectivas impactantes.<br />Garantindo imagens nítidas e detalhadas.</li>
                <li class="text-xl font-bold">Áudio - Microfone Hollyland de ultima geração com tecnologia de transmissão sem fio avançada, ele garante som cristalino e livre de interferências, proporcionando mobilidade e flexibilidade durante as gravações.</li>
              </ul>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
  gsap.from('img', { x: -200, opacity: 0, rotate:35,  duration:1 })
  gsap.from('h1', { x: 200, opacity: 0, duration:1 })
  gsap.from('ul', { x: 200, opacity: 0, duration: 1.2 })
})
</script>