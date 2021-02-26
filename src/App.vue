<template>
  <div id="app">
    <ul>
      <li> <router-link to="/">Home</router-link> </li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

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
  max-width: 100vw;
  min-height: 100vh;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

</style>
