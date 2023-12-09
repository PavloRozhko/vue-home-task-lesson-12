<template>
  <div class="employee-editor">
    <h1 class="employee-editor__title main-title">{{ getComponentTitle }}</h1>
    <div class="employee-editor__items form">
      <div class="employee-editor__item form__item">
        <label for="name">Ім'я</label>
        <input id="name" v-model="employee.name" type="text" />
      </div>
      <div class="employee-editor__item form__item">
        <label for="age">Вік</label>
        <input id="age" v-model="employee.age" type="number" />
      </div>
      <div class="employee-editor__item form__item">
        <label for="position">Посада</label>
        <input id="position" v-model="employee.position" type="text" />
      </div>
      <div class="employee-editor__item form__item">
        <label for="experience">Досвід</label>
        <input id="experience" v-model="employee.experience" type="number" />
      </div>
      <div class="employee-editor__action form__action">
        <button class="form__btn form__btn--add" @click="onAdd">
          {{ getButtonTitle }}
        </button>
        <button class="form__btn form__btn--cancel" @click="onCancel">Скасувати</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EmployeeEditorView',

  data() {
    return {
      employee: {},
    }
  },

  computed: {
    ...mapGetters('employees', ['getEmployeeById']),
    ...mapGetters('candidates', ['getCandidateById']),
    getReceivedEmployeeId() {
      return this.$route.params.employeeId
    },
    getReceivedCandidateId() {
      return this.$route.params.candidateId
    },
    getComponentTitle() {
      return this.getReceivedEmployeeId
        ? `Редагування співробітника ${this.employee.name}.`
        : 'Додати нового співробітника.'
    },
    getButtonTitle() {
      return this.getReceivedEmployeeId ? 'Зберегти' : 'Додати'
    },
  },

  created() {
    if (this.getReceivedEmployeeId) {
      this.employee = { ...this.getEmployeeById(this.getReceivedEmployeeId) }
    } else this.employee = { ...this.getCandidateById(this.getReceivedCandidateId) }
  },

  methods: {
    ...mapActions('employees', ['updateEmployee', 'addNewEmployee']),
    ...mapActions('candidates', ['deleteCandidate']),
    onCancel() {
      if (this.getReceivedEmployeeId) {
        this.$router.push({
          name: 'employees',
        })
      } else {
        this.$router.push({
          name: 'candidates',
        })
      }
    },
    onAdd() {
      if (this.getReceivedEmployeeId) this.updateEmployee(this.employee)
      else {
        this.deleteCandidate(this.getReceivedCandidateId)
        this.addNewEmployee(this.employee)
      }

      this.$router.push({
        name: 'employees',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.employee-editor {
  // .employee-editor__title
  &__title {
    margin-bottom: 25px;
  }
}
</style>
