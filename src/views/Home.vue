<template>
  <div class="home">
    <header>
      <h1>Meet Up</h1>
    </header>
  <AllMeetings />
  </div>
</template>

<script>
import AllMeetings from "./AllMeetings"
export default {
  name: "Home",
  components: {
    AllMeetings
  }
};
</script>
<style scoped>

  h1 {
    display: flex;
    justify-content: center;
    color: rgb(114, 21, 40);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 3rem;
    margin: 20px 0;
  }
</style>
