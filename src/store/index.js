import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: "https://api.jsonbin.io/b/60379342f1be644b0a64db41",
    apiKey: "$2b$10$bKxupXCPzLuxYxBKsGZgx.v0iV82j039iZOI9bmNh.CjjQiiVxQEi",
    events: {
      type: Array,
      default: []
    },
    filteredEvents: Array,
    filter: {
      search: ''
    }
  },
  mutations: {
    showEvents(state, data) {
      state.events = data
    },

    displayFilterSearch(state, data) {
      state.filteredEvents = data
      state.filter.search = data
    },
  },
  actions: { 
    //get events from api
    fetchEvents(ctx) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey,
          "X-Bin-Versioning": "false"
        }
      }
      ax.get(`${ctx.state.apiUrl}`, options).then(data => {
        ctx.commit('showEvents', data.data.events)
      })

    },
    
    async filterSearch(ctx, search) {
      await ctx.commit('displayFilterSearch', search)
      ctx.dispatch['filteredList']
    },

    //send user information to backend
    async sendUser(ctx, value) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey, 
          "X-Bin-Versioning": "false"
        }
      }
      try {
        let data = await ax.put(`${ctx.state.apiUrl}`, {
          events: ctx.state.events,
          user: value,
        }, options)
        console.log('data', data)
      } catch (error) {
        console.log(error)
      }
    },

//send comment to backend
    async sendComments(ctx) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey,
          "X-Bin-Versioning": "false"
        }
      }

      try {
        let data = await ax.put(`${ctx.state.apiUrl}`, {
          events: ctx.state.events,
        }, 
        options)
        ctx.commit('showEvents', data.data.events)
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
  getters: {
    selectedEvent(state) {
      return(eventId) => {
        if(state.events.find) {
          let eventSelected = state.events.find((event) => event.id == eventId)
          return eventSelected
        } else {
          return {}
        }
      }
    },

    filteredList(ctx) {
      if (
        ctx.filter.search == "" ||
        ctx.filter.search === undefined ||
        ctx.filter.search === null
        ) {
        ctx.filteredEvents = ctx.events
      } else {
        ctx.filteredEvents = ctx.events.filter((event) => {
          return event.name.toLowerCase().includes(ctx.filter.search.toLowerCase());
        })
      }
      return ctx.filteredEvents
    }
  },
  modules: {
  },
});
