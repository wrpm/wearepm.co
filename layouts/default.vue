<template>
  <div
    id="app"
    :class="{ loaded: didLoad }">
    <nuxt/>
  </div>
</template>

<script>
export default {
  data: () => ({
    didLoad: false
  }),

  mounted() {
    this.didLoad = true
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  display: none;

  &.loaded {
    display: block;
  }
}
</style>
