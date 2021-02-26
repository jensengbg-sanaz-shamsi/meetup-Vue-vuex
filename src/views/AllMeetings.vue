<template>
    <main id="allEvents">

        <section>
            <input
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
    data() {
        return {
            search: ''
        }
    },
    components: {
        Meetings
    },
    methods: {
        filter() {
            /*if (
                this.search == "undefined" ||
                this.search == null ||
                this.search == ""
            ) {
                let allEvents = this.$store.getters['events'];
                this.filteredList = allEvents;
            } else {
                this.filteredList = this.$store.state.events.filter((event) => {
                    return event.name.toLowerCase().includes(this.search.toLowerCase());
                });
            }*/
            this.$store.dispatch('filterSearch',  this.search)
        }
    },
    computed: {
        filteredList() {
            return this.$store.getters['filteredList']
        }
    },
    beforeMount() {
        this.filter()
    }
}
</script>

<style>
#allEvents {
    display: flex;
    flex-wrap: wrap;
}

.events {
    display: flex;
    flex-wrap: wrap;
}

</style>