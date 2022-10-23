<template>
  <button type="button" @click="flag = !flag">Toggle</button>

  <!-- <Transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello</h2>
    <h2 v-else key="secondary">Another Hello</h2>
  </Transition> -->

  <!-- <Transition name="zoom" appear>
    <h2 v-if="flag">Zoom</h2>
  </Transition> -->

  <Transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
  >
    <h2 v-if="flag">Hello</h2>
  </Transition>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    beforeEnter(el) {},
    enter(el, done) {
      const animation = el.animate([{ transform: 'scale3d(0,0,0)' }, {}], {
        duration: 1000,
      });
      animation.onfinish = () => done();
    },
    afterEnter(el) {},

    beforeLeave(el) {},
    leave(el, done) {
      const animation = el.animate([{}, { transform: 'scale3d(0,0,0)' }], {
        duration: 1000,
      });
      animation.onfinish = () => done();
    },
    afterLeave(el) {},
  },
};
</script>

<style>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

/* This Class Added when Element is entering in DOM (Initial State) */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.2s ease-in-out;
}

.fade-leave-to {
  transition: all 0.2s ease-in-out;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
}
.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
}

@keyframes zoom-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
</style>
