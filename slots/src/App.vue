<template>
  <app-form>
    <template v-slot:help>
      <p>This is some help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>

  <app-form>
    <template v-slot:help>
      <p>This is Contact Form</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from '@/components/Form.vue';
export default {
  name: 'App',
  components: {
    AppForm,
  },
};
</script>
