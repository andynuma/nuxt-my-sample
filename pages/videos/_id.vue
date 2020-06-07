<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class videos extends Vue {
  videos = [
    {
      id: "16",
      name: "intro to NuxtJs",
    },
    {
      id: "1",
      name: "intro to NuxtJs",
    },
    {
      id: "71",
      name: "test",
    },
  ];

  get video() {
    return this.videos.find((v) => v.id === this.$route.params.id);
  }
}
</script>
