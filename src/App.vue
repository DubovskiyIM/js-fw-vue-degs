<template>
  <div id="app">
    <h1>Vue Demonstration Application</h1>
    <hr>
    <label>
      <input type="number" v-model="degs">
    </label>
    <button @click="addPower">Add Power</button>
    <hr>
    <PowersList :degsArr="degsArr"/>
  </div>
</template>

<script>

import PowersList from '@/components/PowersList';

export default {
  name: 'App',
  components: {
    PowersList
  },
  data() {
    return {
      degs: 5
    };
  },
  methods: {
    addPower() {
      this.degs = +this.degs + 1;
    }
  },
  computed: {
    degsArr() {
      return Array.from({ length: this.degs }, (v, i) => 10 + i);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
