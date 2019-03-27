import { shallowMount } from '@vue/test-utils'
import Social from '@/components/partials/Social.vue'

describe('Social.vue', () => {
  it('renders props when passed', () => {
    const wrapper = shallowMount(Social, {
      propsData: {
        socials: [
          {
            type: "ion-social-github",
            link: "https://github.com/polettoweb",
            title: "GitHub Page"
          }
        ]
      }
    })
    console.table(wrapper.props('socials'))
    expect(Array.isArray(wrapper.props('socials'))).toBe(true)
  })
})
