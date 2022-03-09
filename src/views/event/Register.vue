<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      this.$store.commit(
        'change_flash',
        'You are succesfully registered for ' + this.event.title
      )
      setTimeout(() => {
        this.$store.commit('change_flash', '')
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>
