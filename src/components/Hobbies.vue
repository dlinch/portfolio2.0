<template lang="slm">
  div class="hobbies"
    back-button
    h1 My activities are bountiful.
    ul class="hobby-list"
      li v-for="(hobby, index) in hobbies"
        hobby :hobby="hobby"
</template>

<script>
import Hobby from '@/components/Hobby';

export default {
  name: 'hobbies',
  data() {
    return {
      showDescription: false,
      hobbies: [
        {
          name: 'Science Fiction',
          description: 'My first true love was reading. I learned to read early, and I haven\'t really put books down since. When I was a kid on vacation in Hawaii, I complained about so much about not having anything to read my parents almost got me a library card.',
        },
        {
          name: 'Board Games',
          description: 'I am slowly amassing the greatest collection of board games that don\'t take 30 hours to complete. Board game strategy stretches mental muscles I don\'t normally get to stretch, and it is a great bonding experience for friends and family.',
        },
        {
          name: 'Dogs',
          description: 'I have two rescue dogs, and a significant portion of my life revolves around them. More importantly, since I\'ve had my first dog, I have found my empathy for all creatures has grown exponentially.',
        },
        {
          name: 'Movies',
          description: 'My family always took me to movies as a kid, and I love going to see movies in theaters. I know an embarrassing amount of movie trivia,',
        },
        {
          name: 'Hackathons',
          description: 'I love to code, and hackathons are a fun way to knock out an MVP and exhibit a ton of creativity along the way.',
        },
        {
          name: 'Start Ups',
          description: 'I recevied my certificate in Cross Campus Entrepreneurship from CU Boulder, and from there, a love affair was born. I love start ups, and will have my own one day.',
        },
        {
          name: 'Cartoons',
          description: 'This is a golden era of cartoons. They push some serious philosophical dilemmas onto children, and there\'s nothing better than coming home and watching a silly cartoon to decompress from the day.',
        },
        {
          name: 'Fitness',
          description: 'I received my personal training certification in college; being in good shape and pushing the limits of my body has always been a favorite past time.',
        },
        {
          name: 'Meditation',
          description: 'It\'s hard to find hours in the day sometimes, but meditation keeps me level headed and fresh. Starve the ego, feed the soul.',
        },
        {
          name: 'Coding',
          description: 'The esoteric nature is enough to get anyone excited, but the power to create is humbling and awe-inspiring at the same time.',
        },
      ],
    };
  },
  components: {
    hobby: Hobby,
  },
};
</script>

<style lang="scss" scoped>
  .description {
    display: none;
  }

  .hobby-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 5px 0;
    margin: 20px 50px;
    list-style: none;
    &:hover {
      cursor: pointer;
    }
  }


  @media(max-width: 700px) {

    h1 {
      margin-top: 50px;
    }

    .hobby-list {
      grid-template: 100% / 100%;
    }
  }

  @media(min-width: 1200px) {
    .hobby-list{
      grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    }
  }
</style>
