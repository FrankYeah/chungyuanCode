export const strict = false

export const state = () => ({
  currentUser: {},
  tempUser: ''
})

export const mutations = {
  updateUser (state, data) {
    state.auth.user = data
  },
  registerUser (state, data) {
    state.tempUser = data
  }
}
