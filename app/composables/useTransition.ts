import { reactive } from 'vue';
import gsap from 'gsap';

export type TransitionConfig = {
  name: string;
  mode: 'in-out' | 'out-in' | 'default';
  onEnter: (el: any, done: any) => void;
  onLeave: (el: any, done: any) => void;
};

const transitionState = reactive({
  transitionComplete: false,
});

export const useTransition = () => {
  const toggleTransitionComplete = (value: boolean) => {
    transitionState.transitionComplete = value;
  };

  const pageTransitionConfig = (): TransitionConfig => {
    return {
      name: 'page-transition',
      mode: 'out-in',
      onEnter: (el: any, done: any) => {
        gsap.set(el, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
        gsap
          .timeline({
            paused: true,
            onComplete() {
              toggleTransitionComplete(true);
              done();
            },
          })
          .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
          .to(el, { scale: 1, duration: 0.25 })
          .play();
      },
      onLeave: (el: any, done: any) => {
        toggleTransitionComplete(false);
        gsap
          .timeline({ paused: true, onComplete: done })
          .to(el, { scale: 0.8, duration: 0.2 })
          .to(el, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
          .play();
      },
    };
  };

  return {
    transitionState,
    toggleTransitionComplete,
    pageTransitionConfig,
  };
};