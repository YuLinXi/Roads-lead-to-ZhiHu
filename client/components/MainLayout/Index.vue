<template>
  <div class="MainLayout">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MainLayout extends Vue {
}
</script>

<style scoped lang="less">
  .MainLayout {
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto;
    display: flex;
    align-items: flex-start;
  }
</style>
