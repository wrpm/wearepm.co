<template>
  <div
    id="app"
    :class="{ loaded: didLoad }">

    <AppHeader />
    <nuxt/>

  </div>
</template>

<script>
import AppHeader from '@/components/app/AppHeader'

export default {
  components: {
    AppHeader
  },

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
