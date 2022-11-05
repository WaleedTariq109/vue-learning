<template>
  <button
    type="button"
    @click="flag = !flag"
  >
    Toggle
  </button>

  <!-- <Transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello</h2>
    <h2 v-else key="secondary">Another Hello</h2>
  </Transition> -->

  <!-- <Transition name="zoom" appear>
    <h2 v-if="flag">Zoom</h2>
  </Transition> -->

  <!-- <Transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
  >
    <h2 v-if="flag">Hello</h2>
  </Transition> -->

  <button
    type="button"
    @click="addNumber"
  >
    Add Number
  </button>

  <ul>
    <TransitionGroup name="list">
      <li
        v-for="(number, index) in numbers"
        :key="index"
        @click="removeNumber(index)"
      >
        {{ number }}
      </li>
    </TransitionGroup>
  </ul>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addNumber() {
      const num = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, num);
    },

    removeNumber(index) {
      this.numbers.splice(index, 1);
    },

    // beforeEnter(el) {},
    // enter(el, done) {
    //   const animation = el.animate([{ transform: 'scale3d(0,0,0)' }, {}], {
    //     duration: 1000,
    //   });
    //   animation.onfinish = () => done();
    // },
    // afterEnter(el) {},

    // beforeLeave(el) {},
    // leave(el, done) {
    //   const animation = el.animate([{}, { transform: 'scale3d(0,0,0)' }], {
    //     duration: 1000,
    //   });
    //   animation.onfinish = () => done();
    // },
    // afterLeave(el) {},
  },
};
</script>

<style>
li {
  font-size: 22px;
  cursor: pointer;
}

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

/* This Class Added when Element is entering in DOM (Initial State) */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.fade-move {
  transition: all 1s linear;
}

.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
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
