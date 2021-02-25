<template>
    <section>
        <h3>{{ reviews.name }}</h3>
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
            let comment = {
                name: this.review.name,
                email: this.review.email,
                comment: this.review.comment
            }
            return comment
        }
    }
}
</script>

<style>

</style>