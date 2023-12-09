import { createStore } from 'vuex'
import employees from './modules/employees'
import candidates from './modules/candidates'
import interviews from './modules/interviews'
export default createStore({
  modules: {
    employees,
    candidates,
    interviews,
  },
})
