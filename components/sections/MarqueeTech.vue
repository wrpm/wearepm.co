<template>
  <section class="marquee-tech">

    <div class="wrapper">
      <Marquee
        :reverse="false"
        :pauseOnHover="false"
        class="marquee marquee--inverse">
        <div class="marquee-text marquee-text--display">
          <template v-for="(item, i) in [ 'UI/UX', 'Frontend', 'Backend', 'DevOps', 'Cloud' ]">
            <span
              :key="`s-${i}`"
              v-text="item" />
            <span class="delimiter">·</span>
          </template>
        </div>
      </Marquee>

      <Marquee
        :reverse="true"
        :pauseOnHover="false"
        class="marquee marquee--bordered">
        <div class="marquee-text marquee-text--small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incididunt ut labore et dolore magna aliqua.
        </div>
      </Marquee>

      <Marquee
        :reverse="false"
        :pauseOnHover="false"
        class="marquee marquee--bordered">
        <div class="marquee-text marquee-text--small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incididunt ut labore et dolore magna aliqua.
        </div>
      </Marquee>
    </div>

  </section>
</template>

<script>

export default {
  name: 'MarqueeTech'

  // data: () => ({}),
  // mounted() {},
  // methods: {}
}
</script>

<style lang="scss" scoped>
.marquee-tech {
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 40vh;

  .wrapper {
    position: absolute;
    left: 0;
    width: 100vw;
  }

  .marquee {
    padding: 1rem 0;
    background-color: var(--body-bg, $body-bg);
    color: var(--body-color, $body-color);
  }

  .marquee--inverse {
    background-color: var(--body-color, $body-color);
    color: var(--body-bg, $body-bg);
  }

  .marquee--primary {
    background-color: var(--primary, $primary);
    color: var(--body-bg, $body-bg);
  }

  .marquee--bordered {
    border-top: 1px solid var(--body-color, $body-color);
    border-bottom: 1px solid var(--body-color, $body-color);
  }

  .marquee-text {
    font-size: 4rem;
    line-height: 1;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }

  .marquee-text--small {
    font-size: 2rem;
  }

  .marquee-text--display {
    font-size: 8rem;
  }

  .delimiter {
    display: inline-block;
    margin: 0 0.5em;
    font-size: 0.75em;
  }
}
</style>
