<template>
  <div>
    Editing {{ $route.params.id }}
    <br />
    {{ video.name }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class edit extends Vue {
  @Prop({ type: Object, required: true })
  video: any;
}
</script>

<style lang="scss" scoped></style>
