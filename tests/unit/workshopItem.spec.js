import { shallowMount } from '@vue/test-utils'
import WorkshopItem from '@/components/partials/WorkshopItem.vue'

describe('WorkshopItem.vue', () => {
  it('renders props when passed', () => {
    const wrapper = shallowMount(WorkshopItem, {
      propsData: {
        text: "text test",
        image: "image test",
        tags: ['tag test'],
        link: "link test",
        linkTitle: "linkTitle test",
        linkGit: 'linkGit test',
        linkGitTitle: 'linkGitTitle test'
      }
    })
    console.table(wrapper.props())
    expect(wrapper.props('text')).toBe('text test')
    expect(wrapper.props('image')).toBe('image test')
    expect(Array.isArray(wrapper.props('tags'))).toBe(true)
    expect(wrapper.props('link')).toBe('link test')
    expect(wrapper.props('linkTitle')).toBe('linkTitle test')
    expect(wrapper.props('linkGit')).toBe('linkGit test')
    expect(wrapper.props('linkGitTitle')).toBe('linkGitTitle test')


  })
})
