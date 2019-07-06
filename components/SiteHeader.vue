<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__wrapper__logo">
        <logo />
      </div>
      <div class="header__wrapper__nav">
        <site-nav />
      </div>
      <div class="header__wrapper__nav-social">
        <site-nav-social />
      </div>
      <div class="header__wrapper__release">
        <release />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import SiteNav from '~/components/SiteNav'
import SiteNavSocial from '~/components/SiteNavSocial'
import Release from '~/components/Release'

export default {
  name: 'SiteHeader',
  components: {
    Logo,
    SiteNav,
    SiteNavSocial,
    Release
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: $app-padding;
  pointer-events: none;
  z-index: 100;

  @include media-breakpoint-up(md) {
    padding: $app-padding-md;
  }
}
.header__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.header__wrapper__logo {
  position: absolute;
  left: 0;
  top: 0;
}
.header__wrapper__nav {
  position: absolute;
  right: 0;
  top: 0;
}
.header__wrapper__nav-social {
  position: absolute;
  right: 0;
  bottom: 0;
}
.header__wrapper__release {
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
