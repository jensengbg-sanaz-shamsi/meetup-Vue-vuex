<template>
    <section id="comments">
        <h3>From: {{ reviews.email }}</h3>
        <h4>{{ reviews.comment }}</h4>
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
        height: 100px;
        border: 1px solid rgba(134, 209, 209, 0.329);
        box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
        background-color: #ece3e3;
        width: 600px;
        margin: 20px auto;
    }

    h3, h4 {
        margin-left: 20px;
    }
</style>