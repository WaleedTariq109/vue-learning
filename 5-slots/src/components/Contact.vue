<template>
  <app-form>
    <template v-slot:help>
      <p>This is contact form</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="Enter name" />
      <input type="text" placeholder="Enter message" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from "./Form.vue";

export default {
  name: "Contact",
  components: {
    AppForm,
  },
};
</script>
