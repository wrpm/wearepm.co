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
            <div
              class="marquee">
              <span
                class="project-subtitle"
                v-html="project.subtitle" />
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
      return [
        {
          title: 'Infra Nova',
          subtitle: 'Lorem ipsum dolor sit amet'
        },
        {
          title: 'Jupyter',
          subtitle: 'Cupidatat non proident'
        },
        {
          title: 'Lupon Media',
          subtitle: 'Esse cillum dolore eu fugiat'
        },
        {
          title: 'New Startegy',
          subtitle: 'Voluptate velit esse cillum dolore'
        },
        {
          title: 'Hotel Nauta Perast',
          subtitle: 'Dolor in reprehenderit in voluptate'
        },
        {
          title: 'Arizata',
          subtitle: 'Online interior design services'
        },
        {
          title: 'Maximus AI',
          subtitle: 'Ut aliquip ex ea commodo consequat'
        }
      ]
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
      padding-bottom: 1.6rem;

      .project-title {
        font-size: 3.5rem;
        font-weight: 500;
        line-height: 1;
        padding-top: 0.5rem;
        margin-bottom: 0.5rem;
        text-decoration: underline;
      }

      .marquee {
        position: absolute;
        left: 0;
        bottom: 0;
        display: none;
      }

      .project-subtitle {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.56);
        white-space: nowrap;
      }

      &:hover {
        .marquee {
          display: inline-block;
        }
      }
    }
  }
}
</style>
