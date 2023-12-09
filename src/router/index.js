import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EmployeesView from '@/views/EmployeesView.vue'
import EmployeeEditorView from '@/views/EmployeeEditorView.vue'
import CandidatesView from '@/views/CandidatesView.vue'
import CandidateCreator from '@/views/CandidateCreator.vue'
import InterviewsPage from '@/views/InterviewsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeesView,
  },
  {
    path: '/employee/:employeeId?',
    name: 'employee',
    component: EmployeeEditorView,
  },
  {
    path: '/candidate/:candidateId?',
    name: 'candidate',
    component: EmployeeEditorView,
  },
  {
    path: '/candidates',
    name: 'candidates',
    component: CandidatesView,
  },
  {
    path: '/new-candidate',
    name: 'new-candidate',
    component: CandidateCreator,
  },
  {
    path: '/interviews',
    name: 'interviews',
    component: InterviewsPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
