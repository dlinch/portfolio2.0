<template>
  <div>
    <h3 @click="toggle">{{hobby.name}}</h3>
    <transition name="fade">
      <p v-if="showHobby">{{hobby.description}}</p>
    </transition>
  </div>
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

<style>
h3 {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
