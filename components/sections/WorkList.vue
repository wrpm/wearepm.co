<template>
  <section class="work-list">

    <div>
      <base-section-label
        ref="label"
        :label="overline"/>
      <base-section-title
        ref="title"
        :title="title" />
      <base-section-text
        ref="description"
        :text="text" />
    </div>

    <div class="wrapper">
      <div class="list-wrapper">
        <ul class="list">
          <li
            v-for="(project, index) in projects"
            :key="index"
            @mouseover="activeItem = project"
            @mouseleave="activeItem = null">
            <h3
              :class="{ 'not-active': !!activeItem && activeItem !== project, active: activeItem === project }"
              class="project-title">
              <span
                class="stroke"
                v-html="project.title" />
              <span
                class="fill"
                v-html="project.title" />
            </h3>
            <div class="marquee-wrapper">
              <marquee-text
                :duration="10"
                :repeat="5"
                class="marquee">
                <span
                  class="project-subtitle"
                  v-html="project.subtitle" />
              </marquee-text>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkList',

  data: () => ({
    overline: 'What we did?',
    title: 'Selected Projects',
    text:
      "Mission that led us to grow every day and helped us finish these projects is simple: Let’s use our passion to craft unique products and experiences to help clients excel in their business.",
    activeItem: null
  }),

  computed: {
    projects() {
      return this.$store.getters.selectedWork
    }
  },

  mounted() {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.work-list {

  .wrapper {
    position: relative;
    padding-top: 10vh;
    padding-left: 10vw;
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      position: relative;
      padding-bottom: 1.25rem;
      margin-bottom: 0.25rem;
      line-height: 1.25;
      cursor: pointer;

      .project-title {
        position: relative;
        font-size: 4rem;
        font-weight: 600;
        line-height: 1.1;
        margin-bottom: 0.25rem;
        text-transform: uppercase;
        transition: all 1s ease-out;

        // spans

        .stroke {
          position: relative;
          -webkit-text-stroke-width: 0.1px;
          -webkit-text-stroke-color: var(--body-color);
          -webkit-text-fill-color: transparent;
          opacity: 0.4;
        }

        .fill {
          position: absolute;
          left: 0;
          top: 0;
          color: var(--body-color);
          transition: opacity 0.4s ease;
        }

        // state

        // show stroke only
        &.not-active {
          .fill {
            opacity: 0;
          }
        }

        &.active {
          // -webkit-text-fill-color: var(--body-color, $body-color);
        }

        // underline

        &:before,
        &:after {
          content: '';
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 4px;
          bottom: 0;
          left: 0;
          transform-origin: left center;
          transition: transform 0.8s cubic-bezier(0.36, 0.53, 0, 1);
        }

        &:before {
          background: var(--body-color, $body-color);
        }

        &:after {
          transform: scaleX(0);
          background: var(--primary, $primary);
        }

        &:hover {
          &:after {
            transform: scaleX(1);
          }
        }
      }

      .marquee-wrapper {
        position: absolute;
        left: 0;
        bottom: 0;
        display: none;
        width: 100%;
      }

      // .marquee {
      //   width: 100%;
      // }

      .project-subtitle {
        font-size: $font-size-sm;
        font-weight: 400;
        white-space: nowrap;

        &:after {
          content: "\2191"; // upward arrow
          display: inline-block;
          padding: 0 0.5rem;
        }
      }

      &:hover {
        .marquee-wrapper {
          display: block;
        }
      }
    }
  }
}
</style>
