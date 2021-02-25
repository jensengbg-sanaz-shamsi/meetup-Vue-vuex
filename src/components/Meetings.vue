<template>
    <section class="event">
        <img :src="event.imgUrl" alt="picture">
        <h2 class="title">{{ event.name }}</h2>
        <h3>Location: {{ event.location }}</h3>
        <h4>Date: {{ event.date }}</h4>
        <h4>time: {{ event.timeIn }} - {{ event.timeOut }}</h4>
        <h5>Price: {{ event.price }}</h5>

        <button @click="goToInfo(event.id)"> more information </button>
    </section>
</template>

<script>
export default {
    props: {
        event: Object
    },
    methods: {
        goToInfo(id) {
            this.$router.push(`/meetingInfo/${id}`)
        }
    }
}
</script>
<style scoped>
* {
    margin: 5px;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.event {
    margin: 15px;
    padding: 1rem;
    border: 1px solid rgba(214, 188, 188, 0.329);
    background-color: #e4b6c28a;
    box-shadow: 0 0 7px rgba(75, 74, 74, 0.623);
    float: left;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #410314cb;
}

.event img {
    width: 300px;
    height: 220px;
}

.event button {
    width: 184px;
    height: 55px;
    background: #ffffff;
    border-radius: 50px;
}

</style>