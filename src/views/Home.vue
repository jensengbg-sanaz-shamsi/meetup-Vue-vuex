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
