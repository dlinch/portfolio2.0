<template>
  <div class="projects">
    <back-button></back-button>
    <h2>Projects</h2>
    <ul class="project-list">
      <li v-for="project in projects">
        <a :href="project.link">{{project.title}}</a>
        <p class="description">{{project.description}}</p>
        <p >
          {{project.technologies.join(", ")}}
        </p>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data() {
    return {
      projects: [
        {
          title: 'Skyffel',
          link: 'https://skyffel.co',
          description: 'On demand snow shoveling.',
          technologies: ['Node', 'Express', 'Knex'],
        },
        {
          title: 'BookToRead',
          link: 'https://booktoread.herokuapp.com/',
          description: 'An API for award winning Science Fiction.',
          technologies: ['Node', 'Express'],
        },
        {
          title: 'Dander',
          link: 'https://dander.co',
          description: 'Find your new best friend.',
          technologies: ['Node', 'Express'],
        },
        {
          title: 'Board and Play',
          link: 'https://boardandplay.herokuapp.com/',
          description: 'Track your boardgame statistics.',
          technologies: ['Ruby', 'Rails'],
        },
        {
          title: 'Bracketer',
          link: 'https://github.com/dlinch/bracketer',
          description: 'Bracket all the things.',
          technologies: ['JQuery'],
        },
        {
          title: 'Warble',
          link: '#',
          description: 'Under wraps.',
          technologies: ['TBD'],
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  font-family: 'Quicksand', Arial, sans-serif;
  grid-template: 100%;
}

.description {
  font-family: 'Saira Semi Condensed', Arial, serif;
}
.project-list {
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr;
}

li {
  list-style: none;
  margin: 70px;
}

a {
  color: rgba(73,203, 134, .9);
  text-decoration: none;
}

@media(max-width: 700px) {
  .project-list {
    grid-template: 100% / 100%;
  }
}

@media(min-width: 1200px) {
.project-list{
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  }
}
</style>
