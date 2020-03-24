<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
  body {
    background-color: #f6f6f6;
    -webkit-tap-highlight-color: rgba(26,26,26,0);
    color: #1a1a1a;
    font-size: 15px;
  }
</style>
