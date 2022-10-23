<template>
  <h1>This is About Page</h1>
</template>

<script>
export default {
  name: 'About',

  activated() {
    console.log('About is Activated');
  },

  deactivated() {
    console.log('About is Deactivated');
  },
};
</script>
