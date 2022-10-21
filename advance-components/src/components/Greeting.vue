<template>
  <button @click="changeAge">Click</button>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 years old to see the message</p>
</template>

<script>
export default {
  name: 'Greeting',
  props: {
    age: {
      type: Number,
      // required: true,
      validator(value) {
        return value < 130;
      },
    },
  },
  emits: ['ageChange'],
  data() {
    return {
      msg: 'Hello World',
    };
  },
  methods: {
    changeAge() {
      this.$emit('ageChange', 3);
    },
  },
};
</script>
