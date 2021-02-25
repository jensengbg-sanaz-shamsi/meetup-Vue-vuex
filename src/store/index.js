import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
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
  modules: {
  }
})
