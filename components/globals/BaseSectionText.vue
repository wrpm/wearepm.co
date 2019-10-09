<template>
  <p
    class="section__text"
    v-html="text" />
</template>

<script>
export default {
  name: 'SectionText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section__text {
  font-size: 1rem;
  margin: 0;
  margin-top: 1rem;

  @include media-breakpoint-up(md) {
    max-width: 75%;
  }

  @include media-breakpoint-up(lg) {
    max-width: 52%;
  }
}
</style>
