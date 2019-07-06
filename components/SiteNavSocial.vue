<template>
  <div class="navi">
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="nav__item">
      <base-button
        :icon="profile.icon"
        :icon-alt="profile.title"
        :url="profile.url"
        :animation="{delay: 0.3 * index}"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteNavSocial',
  computed: {
    profiles() {
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
