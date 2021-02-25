<template>
    <main id="eventInfo">

        <section class="info">
            <div class="detail">
                <div class="details">
                    <img :src="event.imgUrl" alt="bild" class="img"/>
                    <h1 class="title">{{ event.name }}</h1>
                    <h5>Location: {{ event.location }}</h5>
                    <h5>Date: {{ event.date }}</h5>
                    <h5>time: {{ event.timeIn }} - {{ event.timeOut }}</h5>
                    <h5>Price: {{ event.price }}</h5>
                </div>
                <div class="about">
                    <h2>About this event:</h2>
                    <p>{{ event.discription }}</p>
                </div>
            </div>
            <SignUp :event="event"/>
            <Reviews v-for="review of event.reviews" :key="review.email" :review="review" />
        </section>

        <footer>
            <p>contact us</p>
            <img src="./../assets/fb.jpg" alt="facebook" width="25px" height="25px"/>
            <img src="./../assets/Logo-Twitter.jpg" alt="twitter" width="25px" height="25px" />
            <img src="./../assets/instagram.png" alt="instagram" width="25px" height="25px" />
        </footer>
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
        /*event() {
            let eventInfo = {
                name: this.infoChosen ? this.infoChosen.name : "No title available",
                imgUrl: this.infoChosen ? this.infoChosen.imgUrl : "No image available",
                discription: this.infoChosen ? this.infoChosen.discription : "No description available",
                date: this.infoChosen ? this.infoChosen.date : "No date available",
                location: this.infoChosen ? this.infoChosen.location : "No location available",
                price: this.infoChosen ? this.infoChosen.price : "no price available",
            };
            return eventInfo;
        },
        infoChosen() {
            if (this.$route !== undefined) {
                return this.events.find( (event) => event.id == this.$route.params.id);
            } else {
                return null;
            }
        }*/
        event() {
            return this.$store.getters.chosenEvent(this.$route.params.id)
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
    height: 300px;
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
    position: relative;
}

.details {
    position: absolute;
    margin: 0;
}

h1, h5 {
    margin: 5px 15px;
}

.about {
    position: absolute;
    left: 300px;
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

</style>