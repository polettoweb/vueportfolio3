import { shallowMount } from '@vue/test-utils'
import Skill from '@/components/partials/Skill.vue'

describe('Skill.vue', () => {
  it('renders props when passed', () => {
    const wrapper = shallowMount(Skill, {
      propsData: {
        title: 'Testing title'
      }
    })
    console.log(wrapper.props('title'))
    expect(wrapper.props('title')).toBe('Testing title')

  })
})
