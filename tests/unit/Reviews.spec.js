import { shallowMount, createLocalVue } from '@vue/test-utils';
import Reviews from '@/components/Reviews.vue'
import Vuex from 'vuex'
import Index from '../../src/store/index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Reviews.vue', () => {

    let actions
    let store

    beforeEach(() => {
        actions = {
            actionClick: jest.fn(),
            actionInput: jest.fn()
        }
        store = new Vuex.Store(Index)
    })

    it('should display old comments when page mounted', () => {

        const wrapper = shallowMount(Reviews, {
            propsData: {
                review: {
                    email: 'sanaz@gmail.com',
                    comment: "it was great"
                }
            },
            localVue,
            store
        })

        const expectedEmail = 'sanaz@gmail.com'
        const expectedComment = 'it was great'

        const actualEmail = wrapper.find('h3').text()
        const actualComment = wrapper.find('h4').text()

        expect(actualEmail).toContain(expectedEmail)
        expect(actualComment).toBe(expectedComment)
    })
})