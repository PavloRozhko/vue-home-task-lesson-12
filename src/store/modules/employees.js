import { isSatisfiedSearchConditions } from '../helpers'
export default {
  namespaced: true,
  state: {
    employeesList: [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
        position: 'DevOps',
        experience: 5,
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 28,
        position: 'Frontend Developer',
        experience: 4,
      },
      {
        id: 3,
        name: 'Bob Johnson',
        age: 35,
        position: 'Backend Developer',
        experience: 7,
      },
      {
        id: 4,
        name: 'Alice Williams',
        age: 32,
        position: 'Data Scientist',
        experience: 6,
      },
      {
        id: 5,
        name: 'Charlie Brown',
        age: 28,
        position: 'UI/UX Designer',
        experience: 3,
      },
      {
        id: 6,
        name: 'Eva Davis',
        age: 33,
        position: 'Software Engineer',
        experience: 8,
      },
      {
        id: 7,
        name: 'Frank Wilson',
        age: 31,
        position: 'Security Analyst',
        experience: 5,
      },
      {
        id: 8,
        name: 'Grace Miller',
        age: 29,
        position: 'Network Administrator',
        experience: 4,
      },
      {
        id: 9,
        name: 'Henry Taylor',
        age: 34,
        position: 'Database Administrator',
        experience: 6,
      },
      {
        id: 10,
        name: 'Ivy Brown',
        age: 27,
        position: 'System Analyst',
        experience: 3,
      },
    ],
    filter: {},
  },
  getters: {
    getEmployeesList: (state) => state.employeesList,
    getFilteredEmployeesList: (state) =>
      state.employeesList.filter((employee) => isSatisfiedSearchConditions(employee, state.filter)),
    getEmployeeById: (state) => (employeeId) => state.employeesList.find((employee) => employee.id == employeeId),
  },
  mutations: {
    addNewEmployee(state, employeeObj) {
      state.employeesList.push(employeeObj)
    },
    deleteEmployee(state, employeeId) {
      state.employeesList = state.employeesList.filter((employee) => employee.id !== employeeId)
    },
    editEmployeeInfo(state, employeeObj) {
      const index = state.employeesList.findIndex((employee) => employee.id === employeeObj.id)
      state.employeesList[index] = employeeObj
    },
    setFilter(state, filterObj) {
      state.filter = filterObj
    },
  },
  actions: {
    addNewEmployee({ commit, dispatch }, candidate) {
      dispatch('interviews/deleteInterviewByCandidateId', candidate.id, { root: true })

      commit('addNewEmployee', {
        id: Date.now(),
        name: candidate.name,
        age: candidate.age,
        position: candidate.position,
        experience: candidate.experience,
      })
    },
    deleteEmployee({ commit, dispatch }, employeeId) {
      commit('deleteEmployee', employeeId)
      dispatch('interviews/deleteInterviewByEmployeeId', employeeId, { root: true })
    },
    updateEmployee({ commit }, employee) {
      commit('editEmployeeInfo', employee)
    },
    setFilter({ commit }, filter) {
      commit('setFilter', filter)
    },
  },
}
