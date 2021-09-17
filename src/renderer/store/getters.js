const getters = {
    app: state => state.app,
    normalList: state => state.mission.normalList,
    specialList: state => state.mission.specialList,
    currentID:state => state.mission.currentID
  }
  export default getters
  