<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import full from '../app/components/full.vue'

gsap.registerPlugin(ScrollTrigger)

const main = ref()
let ctx

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector('.box')
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true
        }
      })
    })
  }, main.value) // <- Scope!
})

onUnmounted(() => {
  ctx.revert() // <- Easy Cleanup!
})
</script>

<template>
  <main>
    <full class="bg-primary">
      <h1>Basic ScrollTrigger in VueJS</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </full>
    <full>
      <div class="box gradient-green">box</div>
      <div class="box gradient-green">box</div>
      <div class="box gradient-green">box</div>
    </full>
    <full>
      <h1>The End!</h1>
      <h2 class="center">
        For more information visit:&nbsp;
        <a href="https://greensock.com/scrolltrigger/" target="_blank" rel="noreferrer">
          greensock.com/scrolltrigger/
        </a>
      </h2>
    </full>
  </main>
</template>
