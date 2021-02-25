import { shallowMount, createLocalVue } from '@vue/test-utils';
import SignUp from '@/components/SignUp.vue'
import Vuex from 'vuex'
import Index from '@/store/index.js'


const localVue = createLocalVue()
localVue.use(Vuex)
window.alert = jest.fn();

describe('SignUp.vue', () => {
    /*it('Should search after input in inputfield', () => {
        const filter = jest.spyOn(SignUp.methods, 'filter');

        const wrapper = shallowMount(SignUp, {
            propsData: {
                meetings: allMeetings
            }
        })
        const searchInput = wrapper.find('input');
        searchInput.setValue('Coff');
        searchInput.trigger('input');
        expect(filter).toHaveBeenCalled;
        expect(wrapper.vm.$data.filteredList.length).toBe(1);
    })*/

    
    let actions
    let store

    beforeEach(() => {
        actions = {
            actionClick: jest.fn(),
            actionInput: jest.fn()
        }
        store = new Vuex.Store(Index)
    })


    it('should display welcome to the event when user has pressed the apply button', async () => {
        window.alert = jest.fn();

        const wrapper = shallowMount(SignUp, {
            propsData: {
                event: {
                    "id": 1
                }
            },
            localVue,
            store
        })

        const apply = jest.spyOn(SignUp, 'apply')

        let applyButton = wrapper.find('.join')
        await applyButton.trigger('click')

        expect(apply).toHaveBeenCalled();
        const confirmation = wrapper.find('.confirmation')
        expect(confirmation).toBeTruthy()
    })


    
    it('should display the thank you when user has pressed the button sendIn', async () => {
        const post = jest.spyOn(SignUp.methods, 'post')

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    "id": 1
                }
            },
            localVue,
            store
        })

        let sendBtn = wrapper.find('.post')
        await sendBtn.trigger('click')
        expect(post).toHaveBeenCalled();

        const thanksMsg = wrapper.find('.msg')
        expect(thanksMsg).toBeTruthy()
    })
})