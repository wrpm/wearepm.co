<template>
  <header class="app-header">
    <div class="header__border" />
    <div class="header__wrapper">



      <div class="header__wrapper__logo">
        <AppLogo />
      </div>

      <div class="header__wrapper__nav">
        <AppContact />
      </div>

      <div class="header__wrapper__nav-social">
        <AppNavSocial />
      </div>

      <div class="header__wrapper__release">
        <AppSoon />
        <AppTheme />
        <AppRelease />
      </div>

    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/app/AppLogo'
import AppContact from '@/components/app/AppContact'
import AppNavSocial from '@/components/app/AppNavSocial'
import AppRelease from '@/components/app/AppRelease'
import AppTheme from '@/components/app/AppTheme'
import AppSoon from '@/components/app/AppSoon'

export default {
  name: 'AppHeader',

  components: {
    AppLogo,
    AppContact,
    AppNavSocial,
    AppRelease,
    AppTheme,
    AppSoon
  },

  data: () => ({})
}
</script>

<style lang="scss" scoped>
.app-header {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding: $app-padding;
  pointer-events: none;
  z-index: 100;

  @include media-breakpoint-up(md) {
    position: fixed;
    height: 100%;
    padding: $app-padding;
  }
}

.header__border {
  @include media-breakpoint-up(md) {
    position: fixed;
    height: 100vh;
    width: 1px;
    top: 0;
    left: 200px;
    background: var(--body-color, $body-color);
    opacity: 0.2;
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
