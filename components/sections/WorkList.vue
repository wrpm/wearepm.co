<template>
  <div class="work-list">
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
    <div class="wrapper" >
      <div class="list-wrapper">
        <ul class="list">
          <li
            v-for="(project, index) in projects"
            :key="index">
            <h3
              class="project-title"
              v-html="project.title" />
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
  </div>
</template>

<script>
export default {
  name: 'WorkList',

  data: () => ({
    overline: 'What we did?',
    title: 'Selected Projects',
    text:
      "We're collaborators by nature and we work side by side with customers who trust us, we believe in working <em>with</em> you rather than <em>for</em> you."
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

        transition: color 0.4s ease;
        text-transform: uppercase;
        // text-decoration: underline;


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
          background: var(--black, $black);
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
          // content: "\00d7"; // x
          // content: "\2219"; // bullet
          // content: "\2014"; // em dash
          // content: "\2666"; // diamond
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
