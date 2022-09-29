const siteURL = "http://inpho.local";
export const state = () => ({
    works: []
})

/* export const getters = {
    getterValue: state => {
        return state.value
    }
} */

export const mutations = {
    updateWorks: (state, works) => {
        state.works = works
    }
}

export const actions = {
    async getWorks({ state, commit, dispatch }) {
        if (state.works.length) return

        try {
          let works = await fetch( `${siteURL}/wp-json/wp/v2/portfolio?page=1&per_page=20&_embed=1`
          ).then(res => res.json())
          works = works
            .filter(el => el.status === "publish")
            .map(({ id, slug, title, content }) => ({
              id,
              slug,
              title,
              content
            }))
          commit("updateWorks", works)
        } catch (err) {
          console.log(err)
        }
    }
}