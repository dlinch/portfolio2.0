<template lang="slm">
  div.hobby
    h3 @click="toggle" {{hobby.name}}
    transition name="fade"
      p v-if="showHobby" {{hobby.description}}
</template>

<script>
export default {
  props: {
    hobby: Object,
  },
  // props: ['hobby'],
  data() {
    return {
      showHobby: false,
    };
  },
  methods: {
    toggle() {
      this.showHobby = !this.showHobby;
    },
  },
};
</script>

<style lang="scss">
h3 {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
