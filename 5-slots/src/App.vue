<template>
  <select v-model="componentChange">
    <option value="Register">Register</option>
    <option value="Contact">Contact</option>
  </select>

  <keep-alive>
    <component :is="componentChange"></component>
  </keep-alive>
</template>

<script>
import Register from "./components/Register.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Register,
    Contact,
  },
  data() {
    return {
      componentChange: "Register",
    };
  },
};
</script>
