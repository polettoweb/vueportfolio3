import { shallowMount } from '@vue/test-utils'
import ExpCard from '@/components/partials/ExpCard.vue'

describe('ExpCard.vue', () => {
  it('renders props when passed', () => {
    const wrapper = shallowMount(ExpCard, {
      propsData: {
        number: "odd",
        title: "title test",
        location: "location test",
        date: "date test",
        text: "text test"
      }
    })
    expect(wrapper.props('number')).toBe('odd')
    expect(wrapper.props('title')).toBe('title test')
    expect(wrapper.props('location')).toBe('location test')
    expect(wrapper.props('date')).toBe('date test')
    expect(wrapper.props('text')).toBe('text test')
  })
})
