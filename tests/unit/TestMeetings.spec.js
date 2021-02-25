import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Meetings from '@/components/Meetings.vue'
import Index from '@/store/index.js'

describe('Meetings.vue', () => {
    it('should display all events and the events title from store when mounted', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Index)

        const wrapper = shallowMount(Meetings, {
            propsData: {
                event: {
                    "name": "Film festival"
                }
            },
            localVue,
            store
        });

        let allEventsExist = wrapper.findAll('.event').exists()
        expect(allEventsExist).toBeTruthy();

        const expectedTitle = 'Film festival'
        const actualTitle = wrapper.find('.title').text()
        expect(actualTitle).toBe(expectedTitle);
    })



    it('should display event image when mounted', () => {
        const wrapper = shallowMount(Meetings, {
            propsData: {
                event: {
                    "imgUrl": "http://imgurl.com"
                }
            }
        });

        const imgExist = wrapper.findAll('img')
        expect(imgExist).toBeTruthy();      
    })



    it('should display tha button when mounted and go to individual event when button is clicked', async () => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()

        const wrapper = shallowMount(Meetings, {
            propsData: {
                event: {
                    "id": 1,
                }
            },
            localVue,
            router
        });

        const buttonExist = wrapper.findAll('button')
        expect(buttonExist).toBeTruthy()

        await buttonExist.trigger('click')
        expect(wrapper.vm.$route.path).toBe('/meetingInfo/1')
    })
})