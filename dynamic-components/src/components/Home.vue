<template>
  <h1>This is Home Page</h1>
</template>

<script>
export default {
  name: 'Home',

  mounted() {
    console.log('Maybe not work on 2nd time because of KeepAlive');
  },

  activated() {
    console.log('Home is Activated');
  },

  deactivated() {
    console.log('Home is Deactivated');
  },
};
</script>
