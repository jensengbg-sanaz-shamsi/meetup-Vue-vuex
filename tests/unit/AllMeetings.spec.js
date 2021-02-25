import { shallowMount, createLocalVue } from '@vue/test-utils';
import AllMeetings from '@/views/AllMeetings.vue'
import Vuex from 'vuex'
import Index from '@/store/index.js'

describe('AllMeetings.vue', () => {
    it('should display filtered events when typing in the inputfield', () => {
        const filter = jest.spyOn(AllMeetings.methods, 'filter')

        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Index)

        const allEvents = [
            {
                "id": 1,
                "name": "Film festival"
            },
            {
                "id": 2,
                "name": "Celebration of Norouz"
            }
        ]

        const wrapper = shallowMount(AllMeetings, {
            propsData: {
                events: allEvents
            },
            localVue,
            store
        })

        const inputField = wrapper.find('input')
        inputField.setValue('Film')
        searchInput.trigger('input')

        expect(filter).toHaveBeenCalled()
        expect(wrapper.vm.$data.filteredList.length).toBe(1)
    })
})