<template>
  <section class="activities">
    <div class="wrapper">
      <h2
        ref="title"
        class="title">
        <span class="line">Design.</span>
        <span class="line text-primary">Development.</span>
      </h2>
    </div>
  </section>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Activities'

  // data: () => ({}),
  // mounted() {},
  // methods: {}
}
</script>

<style lang="scss" scoped>
.activities {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @include media-breakpoint-up(md) {
    height: 100vh;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;

    .title {
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin: 0;
      font-size: 12vw;
      font-weight: 500;
      line-height: 1.2;

      @include media-breakpoint-up(md) {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 4rem;
      }

      @include media-breakpoint-up(xl) {
        padding-top: 3rem;
        padding-bottom: 3rem;
        font-size: 8rem;
      }

      span {
        display: block;
        text-decoration: underline;

        &.text-primary {
          color: var(--primary, $primary);
        }
      }
    }
  }
}
</style>
