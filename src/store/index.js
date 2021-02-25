import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: "https://api.jsonbin.io/b/60340c850866664b108169fc/1",
    apiKey: "$2b$10$bKxupXCPzLuxYxBKsGZgx.v0iV82j039iZOI9bmNh.CjjQiiVxQEi",
    events: {
      type: Array,
      default: []
    },
    user: {},
    reviews: Array,
    filteredEvents: Array,
    filter: ''
  },
  mutations: {
    showEvents(state, data) {
      state.events = data
    },

    displayFilterSearch(state, data) {
      state.filteredEvents = data
    },
  },
  actions: { 
    //get events from api
    async fetchEvents(ctx) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey,
          "X-Bin-Versioning": "false"
        }
      }
      let event = await ax.get(`${ctx.state.apiUrl}`, {
        events: ctx.state.events
      }, options)
      ctx.commit('showEvents', event.data.events)

    },
    
    async filteSearch(ctx, search) {
      await ctx.commit('setFilterSearch', search)
      ctx.dispatch('searchFilter')
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
      console.log(value, 'this is value')
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
    events(state) {
      return state.events
    }
  },
  modules: {
  },
});
