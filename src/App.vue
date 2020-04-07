<template>
  <div id="app">
    <resultRadius />
  </div>
</template>

<script>
import resultRadius from './components/resultRadius.vue';

export default {
  name: 'App',

  components: {
    resultRadius,
  },

  data: () => ({}),
};
</script>

<style lang="css">
#app {
  background-color: #82206d;
  background-image: url(http://www.transparenttextures.com/patterns/arches.png);
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  height: 100vh;
  display: flex;
  align-items: center;
  font-family: 'Roboto Light', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
