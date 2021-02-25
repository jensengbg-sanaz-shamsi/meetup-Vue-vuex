<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/signUp">Sign up</router-link>

  <router-view :events="allEvents"/>

  </div>

</template>

<script>
export default {
  name: "App",
    data: () => ({
    events: {},
  }),
  computed: {
    allEvents() {
      return this.$store.state.events;
    }
  },
  beforeMount() {
    this.$store.dispatch("fetchEvents");
  }
}
</script>

<style>
#app {
  background-color: #ccc;
  width: 100%;
}

</style>
