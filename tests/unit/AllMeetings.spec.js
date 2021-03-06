import { shallowMount, createLocalVue } from '@vue/test-utils';
import AllMeetings from '@/views/AllMeetings.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import Index from '../../src/store/index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AllMeetings.vue', () => {

    let actions
    let store

    beforeEach(() => {
        actions = {
            actionClick: jest.fn(),
            actionInput: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    })

    it('should filtered events when searching', () => {
        const filter = jest.spyOn(AllMeetings.methods, 'filter')

        const wrapper = shallowMount(AllMeetings, {
            propsData: {
                events: [
                    {
                        "id": 1,
                        "name": "film festival",
                        "date": "20 jan - 20 feb",
                        "location": "online"
                    },
                ]
            },
            localVue,
            store
        })

        const inputField = wrapper.find('input[type="text"]')
        inputField.setValue('film')

        expect(filter).toHaveBeenCalled()
        expect(inputField.element.value).toBe('film')
    })
    
})
