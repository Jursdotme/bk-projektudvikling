export const state = () => ({
  blogPosts: [],
  SalesItems: [],
  settings: [],
})

export const getters = {
  getPost: (state) => (slug) => {
    return state.blogPosts.find((blogPost) => blogPost.slug === slug)
  },
  getSalesItem: (state) => (slug) => {
    return state.SalesItems.find((SalesItem) => SalesItem.slug === slug)
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getBlogPosts')
    await dispatch('getSalesItems')
    await dispatch('getSettings')
  },
  async getBlogPosts({ commit }) {
    const blogPostFiles = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )

    const blogPosts = blogPostFiles
      .keys()
      .map((key) => {
        const res = blogPostFiles(key)
        res.slug = key.slice(2, -5)
        return res
      })
      .sort(function (a, b) {
        // Sort posts by date, descending.
        return new Date(b.date) - new Date(a.date)
      })

    await commit('setBlogPosts', blogPosts)
  },

  async getSalesItems({ commit }) {
    const SalesItemFiles = await require.context(
      '~/assets/content/sales/',
      false,
      /\.json$/
    )

    const SalesItems = SalesItemFiles.keys()
      .map((key) => {
        const res = SalesItemFiles(key)
        res.slug = key.slice(2, -5)
        return res
      })
      .sort(function (a, b) {
        // Sort posts by date, descending.
        return new Date(b.date) - new Date(a.date)
      })

    await commit('setSalesItems', SalesItems)
  },

  async getSettings({ commit }) {
    const settingsFile = require('~/assets/settings/settings.json')
    await commit('setSettings', settingsFile)
  },
}

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setSalesItems(state, list) {
    state.SalesItems = list
  },
  setSettings(state, data) {
    state.settings = data
  },
}
