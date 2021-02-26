<template>
<main id="signup">
    <section v-show="registeringForm" class="form">
        <h3>Register for this event:</h3>
        <label for="email"></label>
        <input type="text" placeholder="email" v-model="inputValue.email" class="input">
        <label for="name"></label>
        <input type="text" v-model="inputValue.name" placeholder="name" class="input">
        <button @click="register" :disabled="isDisabled" class="join">Join</button>
    </section>

    <section v-show="confirmation" class="confirmationtext">
        <div v-show="feedback" class="confirmationTxt">
            <h3>You are registered for this event! We will send a confirmation and more details in your email adrdress!</h3>
            <p>P.S. we would appreciate if you put your opinion about this event later!</p>
            <textarea email="" id="" cols="50" rows="10" v-model="inputValue.comment">
            </textarea>
            <button @click="post" class="post">send</button>
        </div>
        <div class="thanksMsg">
            <h3 v-show="thanksMsg" class="msg">Thank you for your feedback!</h3>
        </div>
    </section>
</main>


</template>

<script>

export default {
    name: "SignUp",
    props: {
        event: Object
    },
    data() {
        return {
            registeringForm: true,
            confirmation: false,
            disabled: true,
            feedback: true,
            thanksMsg: false,
            inputValue: {
                email: "",
                username: "",
                comment: ""
            }
        }
    },
    methods: {
        register() {
            if (this.inputValue.name >= 0) {
                alert("You need to type in your name");
            } else if (this.inputValue.email >= 0) {
                alert("You need to type in your email");
            } else {
                this.confirmation = true;
                this.registeringForm = false;
                this.clearTextbox();
            }
        },
        post() {
            this.thanksMsg = true
            if (this.inputValue.comment >= 0) {
                alert("You don´t write any comment");
            } else {
                let newComment = this.event.reviews;
                newComment.push(this.inputValue);
                this.$store.dispatch("sendComments", newComment);
                this.clearTextbox();
                this.feedback = false
            }
        },
        clearTextbox() {
            let newText = {
                email: "",
                comment: ""
            }
            this.inputValue = newText
            return this.inputValue
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
    #signup {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .form, .confirmationTxt {
        height: 120px;
        border: 1px solid rgba(134, 209, 209, 0.329);
        box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
        background-color: #ece3e3;
        width: 600px;
        margin: 20px auto;
    }

    .confirmationTxt {
        height: 350px;
    } 

    .msg {
        margin: 20px 20px;
        color: rgb(105, 53, 53);
    }

    .input {
        padding: 0.5rem;
        margin: 20px;
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

    h3, p {
        margin-left: 20px;
    }

    textarea {
        width: 400px;
        height: 200px;
        margin-left: 20px ;
    }
</style>