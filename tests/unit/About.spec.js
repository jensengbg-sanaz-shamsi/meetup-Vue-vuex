
import { shallowMount, createLocalVue } from '@vue/test-utils';
import About from '@/views/About.vue'

describe('About.vue', () => {
    it('should display title when mounted', () => {
        const wrapper = shallowMount(About)
        const expectedTitle = 'about us'
        const actualTitle = wrapper.find('h1').text();

        expect(actualTitle).toBeTruthy()
        expect(actualTitle).toBe(expectedTitle);
    })
})