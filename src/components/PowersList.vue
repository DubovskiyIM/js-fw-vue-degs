<template>
  <ul>
    <PowerItem v-for="(deg, i) in degsArr"
               :key="i"
               :deg="deg"
    />
  </ul>
</template>

<script>
import PowerItem from '@/components/PowerItem';
export default {
  name: 'PowersList',
  components: {
    PowerItem
  },
  props: {
    degsArr: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
