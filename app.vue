<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { toggleTransitionComplete } = useTransition();

onMounted(() => {
  toggleTransitionComplete(true);
});
const transitionName = ref('page-transition');

const beforeEnter = (el) => {
  console.log('oi')
  gsap.set(el, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
};
const enter = (el, done) => {
  gsap
    .timeline({
      paused: true,
      onComplete() {
        done();
      },
    })
    .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
    .to(el, { scale: 1, duration: 0.25 })
    .play();
};

const leave = (el, done) => {
  gsap
    .timeline({ paused: true, onComplete: done })
    .to(el, { scale: 0.8, duration: 0.2 })
    .to(el, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
    .play();
};
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>