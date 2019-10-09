<template>
  <nav class="app-nav-social">
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="nav__item">

      <IconButton
        :url="profile.url">
        <component
          :is="iconComponent(profile)"
          :alt="profile.text"
          class="icon"
          role="img" />
      </IconButton>
    </div>
  </nav>
</template>

<script>
import SvgIconFacebook from '~/assets/img/icons/facebook.svg?inline'
import SvgIconInstagram from '~/assets/img/icons/instagram.svg?inline'
import SvgIconTwitter from '~/assets/img/icons/twitter.svg?inline'
import SvgIconLinkedin from '~/assets/img/icons/linkedin.svg?inline'
import SvgIconBehance from '~/assets/img/icons/behance.svg?inline'
import SvgIconGithub from '~/assets/img/icons/github.svg?inline'

export default {
  name: 'AppNavSocial',

  components: {
    SvgIconFacebook,
    SvgIconInstagram,
    SvgIconTwitter,
    SvgIconLinkedin,
    SvgIconBehance,
    SvgIconGithub
  },

  computed: {
    profiles() {
      return this.$store.getters.socialProfiles
    }
  },

  methods: {
    iconComponent(profile) {
      let cName = `SvgIcon${profile.name}`
      if (cName in this.$options.components) {
        return cName
      }
      return 'img'
    },

    iconSrc(profile) {
      return `/icons/${profile.icon}`
    }
  }
}
</script>

<style lang="scss" scoped>
$navItemWidth: 40px;

.app-nav-social {
  display: flex;
  flex-direction: row;
  pointer-events: auto;

  @include media-breakpoint-up(md) {
    flex-direction: column;
  }
}

.nav__item {
  width: $navItemWidth;
  height: $navItemWidth;
  margin-left: -2px;

  &:first-child {
    margin-left: 0;
  }

  @include media-breakpoint-up(md) {
    margin-left: 0;
    margin-top: -2px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
