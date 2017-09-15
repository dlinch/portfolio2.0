<template lang="slm">
  div class="contact"
    back-button
    h1 Get in touch.
    h3 Click email to copy. Click any other link to navigate away.
    h2
      a href='#' @click="emailSlot" @mouseleave="hideTip" Email
    input style="position: absolute; left: -1000px; top: -1000px" value="dlinch33@gmail.com" id="emailVal"
    ul v-for="contact in contacts"
      li
        h2
          a :href="contact.value" {{contact.method}}
</template>

<script>

export default {
  name: 'contact',
  data() {
    return {
      email: 'dlinch33@gmail.com',
      contacts: [
        {
          method: 'Github',
          value: 'https://github.com/dlinch',
        },
        {
          method: 'LinkedIn',
          value: 'https://www.linkedin.com/in/deriklinch/',
        },
      ],
    };
  },
  methods: {
    emailSlot(e) {
      e.preventDefault();
      const emailInput = document.querySelector('#emailVal');
      emailInput.select();
      try {
        const success = document.execCommand('copy');
        if (!success) {
          emailInput.style.display = 'inline-block';
        }
      } catch (err) {
        emailInput.style.display = 'inline-block';
      }
    },
    hideTip() {
      const toolTip = document.querySelector('.tool-tip');
      if (toolTip) {
        toolTip.remove();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  ul {
    padding: 0;
  }

  a {
    color: rgba(73,203, 134, .9);
    text-decoration: none;
  }
</style>
