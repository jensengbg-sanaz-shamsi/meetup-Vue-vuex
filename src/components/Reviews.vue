<template>
    <section id="comments">
        <h5>from: {{ review.email }}</h5>
        <h4>{{ review.comment }}</h4>
    </section>
</template>

<script>
export default {
    props: {
        review: Object
    },
    computed: {
        reviews() {
            let newComment = {
                email: this.review.email,
                comment: this.review.comment
            }
            return newComment
        }
    }
}
</script>

<style scoped>
    #comments {
        border: 1px solid rgba(134, 209, 209, 0.329);
        box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
        background-color: #ece3e3;
        width: 600px;
        margin: 20px auto;
    }

    h5, h4 {
        margin-left: 20px;
        margin-bottom: 0;
    }

    h5 {
        color: rgb(87, 38, 48);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    @media only screen and (max-width: 600px) {
        #comments {
            width: 300px;
        }
    }
</style>