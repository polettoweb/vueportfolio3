import { shallowMount } from '@vue/test-utils'
import Keywords from '@/components/partials/Keywords.vue'

describe('Keywords.vue', () => {
  it('renders props when passed', () => {
    const wrapper = shallowMount(Keywords, {
      stubs: ['sequential-entrance'],
      propsData: {
        words: [
          'test',
          'test2'
        ]
      }
    })
    console.table(wrapper.props('words'))
    expect(Array.isArray(wrapper.props('words'))).toBe(true)

  })
})
