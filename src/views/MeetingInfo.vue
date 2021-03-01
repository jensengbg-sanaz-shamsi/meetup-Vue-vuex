<template>
    <main id="eventInfo">

        <section class="info">
            <div class="detail">
                <div class="details">
                    <img :src="event.imgUrl  || 'No title available' " alt="bild" class="img" />
                    <h1 class="title">{{ event.name || 'No title available'}}</h1>
                    <h5>Location: {{ event.location || 'No location available'}}</h5>
                    <h5>Date: {{ event.date || 'No date available'}}</h5>
                    <h5>time: {{ event.timeIn || 'No detail available'}} - {{ event.timeOut || 'No detail available'}}</h5>
                    <h5>Price: {{ event.price || 'No price available'}}</h5>
                </div>
                <div class="about">
                    <h2>About this event:</h2>
                    <p>{{ event.discription || 'No description available' }}</p>
                </div>
            </div>
            <SignUp :event="event"/>
            <Reviews v-for="review of event.reviews" :key="review.email" :review="review" />
        </section>
    </main>
</template>

<script>
import SignUp from '../components/SignUp'
import Reviews from '../components/Reviews'
export default {
    components: {
        SignUp,
        Reviews
    },
    computed: {
        event() {
            return this.$store.getters.selectedEvent(this.$route.params.id)
        },
    },
};
</script>
<style scoped>
#eventInfo {
    margin: 5px;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.info {
    height: 330px;
    border: 1px solid rgba(134, 209, 209, 0.329);
    box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
    background-color: #ece3e3;
    width: 600px;
    margin: 20px auto;
}

.detail {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.details {
    margin: 0;
}

h1, h5 {
    margin: 5px 15px;
}

.about {
    left: 300px;
    margin-right: 20px;
}


h5 {
    font-size: 60%;
}
.img {
    width: 250px;
    height: 150px;
    margin: 20px 10px
}
.title {
    color: rgb(114, 13, 13);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h2 {
    margin-top: 30px;
    font-family: monospace;
    font-weight: bold;
    color :rgb(73, 34, 34);
}
p {
    font-family: Arial, Helvetica, sans-serif;
}

@media only screen and (max-width: 600px) {
    .detail {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }


    .info {
        height: 580px;
        border: 1px solid rgba(134, 209, 209, 0.329);
        box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
        background-color: #ece3e3;
        width: 300px;
        margin: 20px auto;
    }

    .about {
        margin-left: 20px;
    }
    
    h2 {
        margin-top: 10px;
        margin-bottom: 0;
    }

    p {
        font-size: 90%;
    }

    .img {
        margin: 20px 20px;
    }
}

</style>