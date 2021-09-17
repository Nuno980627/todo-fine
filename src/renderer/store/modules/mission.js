const state = {
  normalList: [
    {
      id: 0,
      name: '普通的todo1',
      type: 'normal',
    },
    {
      id: 10,
      name: '普通的todo2',
      type: 'normal',
    },
  ],
  specialList: [
    {
      id: 20,
      name: '特别的todo1',
      type: 'special',
    },
    {
      id: 30,
      name: '特别的todo2',
      type: 'special',
    },
  ],
  currentID: 0,
}
const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
