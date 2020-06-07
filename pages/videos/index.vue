<template>
  <div>
    <h1>Videos</h1>
    <div v-for="video in videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">
        {{ video.name }}
      </nuxt-link>
    </div>
    <nuxt-child />
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
}
</script>

<style lang="scss" scoped></style>
