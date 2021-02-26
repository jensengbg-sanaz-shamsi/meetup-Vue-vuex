<template>
    <main id="allEvents">

        <section>
            <input
                class="search"
                type="text"
                placeholder="Searching for title..."
                v-model="search"
                @input="filter()"
            />
            <div v-if="!filteredList || !filteredList.length">
                <h2 style="color: red">No events available</h2>
            </div>
            <div class="events" v-else>
                <Meetings v-for="event in filteredList" :key="event.id" :event="event" />
            </div>
        </section>

    </main>
</template>

<script>
import Meetings from '@/components/Meetings'
export default {
    name: "AllMeetings",
        components: {
        Meetings
    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        filter() {
            this.$store.dispatch('filterSearch',  this.search)
        }
    },
    computed: {
        filteredList() {
            return this.$store.getters['filteredList']
        }
    }
}
</script>

<style>
#allEvents {
    display: flex;
    flex-wrap: wrap;
}

.search {
    height: 30px;
    width: 300px;
    display: flex;
    margin: 20px auto;
    box-shadow: 0 0 0px rgba(43, 41, 41, 0.623);;
}

.events {
    display: flex;
    flex-wrap: wrap;
}



</style>