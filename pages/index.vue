<template>
  <div class="page page--index">
    <main
      class="site-content"
      role="main">

      <!-- grid lines -->
      <!-- <div class="grid-lines">
        <div class="grid-lines__container">
          <div class="row">
            <div
              v-for="i in 12"
              :key="`grid-line-${i}`"
              :class="[ `col--${i}` ]"
              class="col-1">
              <div class="lines" />
            </div>
          </div>
        </div>
      </div> -->

      <!-- content -->
      <div class="site-content__container">
        <Intro />
        <About />
        <Trail />
        <Activities />
        <Capabilities />
        <WorkList />
        <Process />
        <Interest />
        <Contact />
      </div>
    </main>
  </div>
</template>

<script>
import pageHeadMixin from '@/mixins/pageHeadMixin'

import Intro from '@/components/sections/Intro'
import About from '@/components/sections/About'
import Trail from '@/components/sections/Trail'
import Activities from '@/components/sections/Activities'
import Capabilities from '@/components/sections/Capabilities'
import Process from '@/components/sections/Process'
import Work from '@/components/sections/Work'
import WorkList from '@/components/sections/WorkList'
import Interest from '@/components/sections/Interest'
import Contact from '@/components/sections/Contact'

export default {
  name: 'Index',

  components: {
    Intro,
    About,
    Trail,
    Activities,
    Capabilities,
    Work,
    WorkList,
    Process,
    Interest,
    Contact
  },

  mixins: [pageHeadMixin],

  head: {
    title: 'WRPM - Digital Creative Agency Belgrade',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'We are a group of talented creatives and developers who come together to design, build and grow consumer-facing digital solutions crafted to solve unique business challenges.'
      }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.APP_URL
      }
    ]
  }
}
</script>

<style lang="scss">
.page--index {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 0 $app-padding;
  z-index: 1;
  overflow: hidden;
}

@mixin content-padding {
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
}

.grid-lines {
  display: none;

  @include media-breakpoint-up(md) {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    // height: 100%;
    user-select: none;
    z-index: -1;
    pointer-events: none;

    height: 150%;
    transform: translateY(-25%);
  }

  .grid-lines__container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    height: 100%;
  }

  .row {
    height: 100%;

    .col-1 {

      .lines {
        width: 100%;
        height: 100%;
        background: rgba($red, 0.12)
      }
    }
  }
}

.site-content {
  @include content-padding;

  .site-content__container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }
}
</style>
