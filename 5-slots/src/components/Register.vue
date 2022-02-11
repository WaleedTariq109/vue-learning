<template>
  <app-form>
    <template v-slot:help>
      <p>This is Registration Form</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="Enter name" />
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from "./Form.vue";

export default {
  name: "Register",
  components: {
    AppForm,
  },
};
</script>
