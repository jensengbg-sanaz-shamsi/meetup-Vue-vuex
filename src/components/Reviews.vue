<template>
    <section>
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
    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 2rem;
        border: rgba(58, 55, 55, 0.521) solid 0.7px;
        padding: 1rem;
    }
</style>