import { shallowMount } from '@vue/test-utils';

import Home from '../../src/views/Home.vue';

describe('Home.vue', () => {
    it('should display title when mounted', () => {
        const wrapper = shallowMount(Home);
        const expectedTitle = 'Meet Up';

        const actualTitle = wrapper.find('h1').text();

        expect(actualTitle).toBe(expectedTitle);
    })
})