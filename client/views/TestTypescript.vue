<template>
  <div class="testTypescript">
    12312
  </div>
</template>

<script lang="ts">
import { Vue, Model } from 'vue-property-decorator';

export default class TestTypescript extends Vue {
  @Model('change', { type: Boolean }) readonly checked!: boolean
}
</script>

<style scoped>

</style>
