<template>
  <li>{{2}}<sup>{{deg}}</sup>: {{2 ** deg}}</li>
</template>

<script>
export default {
  props: ['deg'],
  name: 'PowerItem'
};
</script>

<style scoped>

</style>
