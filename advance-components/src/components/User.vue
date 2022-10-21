<template>
  <p>The User is {{ age }} Years Old</p>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
};
</script>
