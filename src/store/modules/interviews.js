import { days } from '@/components/InterviewsCreator/settings'

export default {
  namespaced: true,
  state: {
    interviewsList: [
      {
        id: 1,
        employeeId: 1,
        candidateId: 1,
        dayId: 2,
      },
      {
        id: 2,
        employeeId: 2,
        candidateId: 2,
        dayId: 3,
      },
      {
        id: 3,
        employeeId: 3,
        candidateId: 3,
        dayId: 1,
      },
    ],
  },
  getters: {
    getFilledInterviewsList: (state, getters, rootState, rootGetters) =>
      state.interviewsList.map((interview) => ({
        id: interview.id,
        employeeName: rootGetters['employees/getEmployeeById'](interview.employeeId).name,
        candidateName: rootGetters['candidates/getCandidateById'](interview.candidateId).name,
        dayTitle: days.find((day) => day.id === interview.dayId).title,
      })),
  },
  mutations: {
    deleteInterview(state, interviewId) {
      state.interviewsList = state.interviewsList.filter((interview) => interview.id !== interviewId)
    },
    addNewInterview(state, interviewObj) {
      state.interviewsList.push(interviewObj)
    },
    deleteInterviewByEmployeeId(state, removedEmpId) {
      state.interviewsList = state.interviewsList.filter((interview) => interview.employeeId !== removedEmpId)
    },
    deleteInterviewByCandidateId(state, removedCandidateId) {
      state.interviewsList = state.interviewsList.filter((interview) => interview.candidateId !== removedCandidateId)
    },
  },
  actions: {
    deleteInterview({ commit }, interviewId) {
      commit('deleteInterview', interviewId)
    },
    addNewInterview({ commit }, interviewObj) {
      commit('addNewInterview', {
        id: Date.now(),
        ...interviewObj,
      })
    },
    deleteInterviewByEmployeeId({ commit }, employeeId) {
      commit('deleteInterviewByEmployeeId', employeeId)
    },
    deleteInterviewByCandidateId({ commit }, candidateId) {
      commit('deleteInterviewByCandidateId', candidateId)
    },
  },
}
