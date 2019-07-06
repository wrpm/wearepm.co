<template>
  <h2 
    ref="title" 
    class="section__title" 
    v-html="title" />
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section__title {
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  font-weight: 600;

  @include media-breakpoint-up(md) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 2rem;
  }

  // @include media-breakpoint-up(md) {
  //   padding-top: 2rem;
  //   padding-bottom: 2rem;
  //   font-size: 2rem;
  // }
}
</style>
