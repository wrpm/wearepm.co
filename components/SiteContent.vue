<template>
  <div class="site-content">
    <div class="site-content__container">
      <intro />
      <capabilities />
      <process />
      <interest />
      <contact />
    </div>
  </div>
</template>

<script>
import Intro from '~/components/sections/Intro'
import Capabilities from '~/components/sections/Capabilities'
import Process from '~/components/sections/Process'
import Interest from '~/components/sections/Interest'
import Contact from '~/components/sections/Contact'

export default {
  name: 'site-content',
  components: {
    Intro,
    Capabilities,
    Process,
    Interest,
    Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.site-content {
  

  @include media-breakpoint-up(md) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @include media-breakpoint-up(lg) {
    padding-left: 120px;
    padding-right: 120px;
  }

  @include media-breakpoint-up(xl) {
    padding-left: 160px;
    padding-right: 160px;
  }

  .site-content__container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }
}
</style>
