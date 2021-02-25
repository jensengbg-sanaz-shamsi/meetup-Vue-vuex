<template>
<main>
    <section v-show="registeringForm">
        <h3>Register for this event:</h3>
        <label for="email">Email:</label>
        <input type="text" placeholder="email" v-model="inputValue.email">
        <label for="name">Name:</label>
        <input type="text" v-model="inputValue.name" placeholder="name">
        <button @click="register" :disabled="!isDisabled">Join</button>
    </section>

    <section v-show="confirmation">
        <h3>You are registered for this event! We will send a confirmation and more details in your email adrdress!</h3>
    </section>
</main>


</template>

<script>

export default {
    name: "SignUp",
    data() {
        return {
            registeringForm: true,
            confirmation: false,
            inputValue: {
                email: "",
                username: ""
            }
        }
    },
    methods: {
        register() {
            const data = {
                username: this.inputValue.username,
                email: this.inputValue.email
            }
            this.$store.dispatch('sendUser', data)
            this.registeringForm = false
            this.confirmation = true
        }
    },
    computed: {
        isDisabled() {
            if(this.inputValue.email < 1) {
                return this.disabled;
            } 
            if(this.inputValue.name < 1) {
                return this.disabled;
            } else {
                return !this.disabled;
            }
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 2rem;
    }
    input {
        padding: 0.5rem;
        margin: 0.5rem;
        border: rgba(71, 66, 66, 0.507) solid 1px;
        border-radius: 3px;
    }
    button {
        padding: 0.5rem;
        border-radius: 3px;
        border: rgba(71, 66, 66, 0.507) solid 1px;
    }
    button:hover {
        cursor: pointer;
    }
</style>