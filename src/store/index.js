import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Hector Jose Vurchio Hurtado',
    flashMessage: '',
    event: null,
    events: [],
  },
  mutations: {
    insert_event(state, value) {
      state.event = value
    },
    change_flash(state, chanPL) {
      state.flashMessage = chanPL
    },
  },
  actions: {},
  modules: {},
})
