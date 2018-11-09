<template>
  <div class="navi">
    <div class="nav__item" v-for="(profile, index) in profiles" :key="index">
      <base-button
        :icon="profile.icon"
        :url="profile.url"
        :animation="{delay: 0.3 * index}"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'site-nav-social',
  computed: {
    profiles () {
      return this.$store.getters.socialProfiles
    }
  }
}
</script>

<style lang="scss" scoped>
$navItemWidth: 40px;

.navi {
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
    margin-left: 0
  }

  @include media-breakpoint-up(md) {
    margin-left: 0;
    margin-top: -2px;

    &:first-child {
      margin-top: 0
    }
  }
}
</style>
