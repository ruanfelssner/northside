<template>
      <div class="container">
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1 flex flex-col items-center ">
            <img src="/assets/img/captacao-fotos.png" alt="" class="rounded-lg">
          </div>
          <div class="col-span-1 flex flex-col justify-center">
            <h1 class="mb-4">Fotos</h1>
              <ul class="list-disc p-4">
                <li class="text-xl font-bold">Imagens de alta qualidade tornam o conteúdo mais atraente, aumentando o engajamento do público e a visibilidade nas redes sociais. Além disso, fotos autênticas e bem escolhidas fortalecem a identidade da marca</li>
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