<template>
  <div>
    <h1>in Teatre</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class theatre extends Vue {
  layout() {
    return "theatre";
  }
}
</script>

<style lang="scss" scoped></style>
