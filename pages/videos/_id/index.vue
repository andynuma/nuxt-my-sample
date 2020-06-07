<template>
  <div>
    <div>We are in{{ $route.params.id }}</div>
    {{ video.name }}
    <br />
    <nuxt-link :to="`/videos/${$route.params.id}/edit`">
      Edit
    </nuxt-link>
    <br />
    <nuxt-link to="/videos">
      back to videos
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class index extends Vue {
  @Prop({ type: Object, required: true })
  video: any;
}
</script>

<style lang="scss" scoped></style>
