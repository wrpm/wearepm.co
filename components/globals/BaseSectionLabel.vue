<template>
  <div class="section__label">
    <span
      ref="label"
      class="label"
      v-html="label"/>
    <slot />
    <span
      ref="line"
      class="line"/>
  </div>
</template>

<script>
// import {TimelineMax} from 'gsap'
export default {
  name: 'SectionLabel',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section__label {
  display: block;
  position: relative;
  padding-bottom: $spacer;

  @include media-breakpoint-up(md) {
    padding-bottom: 2rem;
  }

  .label {
    display: block;
    font-weight: 500;
    font-size: $font-size-sm;
    text-transform: uppercase;
    color: var(--body-color, $body-color);
  }

  .line {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--primary, $primary);
    // background: var(--black, $black);
  }
}
</style>
