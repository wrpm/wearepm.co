<template>
  <div class="page page--index">
    <main
      class="site-content"
      role="main">
      <div class="site-content__container">
        <Intro />
        <About />
        <Intro2 />
        <Capabilities />
        <!-- <Work /> -->
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
import Intro2 from '@/components/sections/Intro2'
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
    Intro2,
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
