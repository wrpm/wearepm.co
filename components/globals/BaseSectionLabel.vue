<template>
  <div class="section__label">
    <span 
      ref="text" 
      class="line">{{ label }}</span>
    <slot />
    <span 
      ref="line" 
      class="section__label__line"/>
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
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding-bottom: 1rem;
  text-transform: uppercase;

  @include media-breakpoint-up(md) {
    padding-bottom: 2rem;
  }

  .line {
    display: block;
  }

  .muted {
    display: inline-block;
    opacity: 0.3;
    text-transform: none;
  }

  small {
    font-weight: normal;
  }
}

.section__label__line {
  display: block;
  position: absolute;
  bottom: 0;
  border: 1px solid $body-color;
  width: 30px;
}
</style>
