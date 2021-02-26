import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import SignUp from '@/components/SignUp.vue'
import Vuex from 'vuex'
import Index from '@/store/index.js'



const localVue = createLocalVue()
localVue.use(Vuex)
window.alert = jest.fn();

describe('SignUp.vue', () => {

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

    it('should show confirmationMSG when button is clicked', async () => {

        const wrapper = shallowMount(SignUp)
        let joinBtn = wrapper.find('.join')
        await joinBtn.trigger('click')
        
        let confirmation = wrapper.find('.confirmationtext')
        let confirmationText = wrapper.find('.msg').text()
        let expectedText = 'You are registered for this event! We will send a confirmation and more details in your email adrdress!'
        
        expect(confirmation).toBeTruthy()
        expect(confirmationText).toBeTruthy()
        expect(confirmationText).toBe(expectedText)
    })

    /*it('click submit should not work when inputs are empty', async () => {
       // const spySubmit = jest.spyOn(SignUp.methods, 'submit')
        const wrapper = mount(SignUp, {
            propsData: {
                event: {
                    "id": 1
                }
            },
        })
        const spySubmit = jest.spyOn(wrapper.vm, 'submit')
        const emailInput = wrapper.find('.mailInput')
        const userInput = wrapper.find('.nameInput')

        let submitBtn = wrapper.find('.join')
        
        await submitBtn.trigger('click')
        expect(emailInput.length).toBe(undefined)
        expect(userInput.length).toBe(undefined)
        expect(spySubmit).toBeCalledTimes(0)
    })*/

})
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



/* it('should display welcome to the event when user has pressed the apply button', async () => {
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
    })*/
