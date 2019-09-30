<template>
  <div class="page page--index">
    <SiteHeader />
    <SiteContent />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteContent from '@/components/SiteContent'
import pageHeadMixin from '@/mixins/pageHeadMixin'

export default {
  name: 'Index',
  components: {
    SiteHeader,
    SiteContent
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
        href: 'https://wearepm.co'
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
  padding: $app-padding;
  z-index: 1;
  overflow: hidden;
}
</style>
