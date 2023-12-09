export default {
  namespaced: true,
  state: {
    candidatesList: [
      {
        id: 1,
        name: 'John Wick',
        age: 28,
        position: 'Software Engineer',
        experience: 5,
      },
      {
        id: 2,
        name: 'Jane Eyre',
        age: 25,
        position: 'DevOps',
        experience: 3,
      },
      {
        id: 3,
        name: 'Mike Johnson',
        age: 30,
        position: 'Data Scientist',
        experience: 7,
      },
      {
        id: 4,
        name: 'Emily Brown',
        age: 32,
        position: 'UI/UX Designer',
        experience: 6,
      },
      {
        id: 5,
        name: 'Alex Wilson',
        age: 26,
        position: 'Network Administrator',
        experience: 4,
      },
      {
        id: 6,
        name: 'Chris Davis',
        age: 29,
        position: 'Frontend Developer',
        experience: 5,
      },
      {
        id: 7,
        name: 'Jessica Taylor',
        age: 31,
        position: 'Cybersecurity Analyst',
        experience: 8,
      },
    ],
  },
  getters: {
    getCandidatesList: (state) => state.candidatesList,
    getCandidateById: (state) => (candidateId) => state.candidatesList.find((candidate) => candidate.id == candidateId),
  },
  mutations: {
    addNewCandidate(state, candidateObj) {
      console.log(candidateObj)
      state.candidatesList.push(candidateObj)
    },
    deleteCandidate(state, candidateId) {
      state.candidatesList = state.candidatesList.filter((candidate) => candidate.id != candidateId)
    },
  },
  actions: {
    addNewCandidate({ commit }, candidate) {
      commit('addNewCandidate', {
        id: Date.now(),
        ...candidate,
      })
    },
    deleteCandidate({ commit, dispatch }, candidateId) {
      commit('deleteCandidate', candidateId)
      dispatch('interviews/deleteInterviewByCandidateId', candidateId, { root: true })
    },
  },
}
