<template>
  <div class="employees">
    <h2 class="employees__title main-title">Список працівників</h2>
    <div class="employees__list">
      <div class="employees__header grid">
        <div>Ім'я працівника</div>
        <div>Вік працівника</div>
        <div>Посада працівника</div>
        <div>Досвід працівника</div>
      </div>
      <employee-component
        v-for="employee in getFilteredEmployeesList"
        :key="employee"
        :employee-data="employee"
        class="employees__item grid"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmployeeComponent from './EmployeeComponent.vue'

export default {
  name: 'EmployeesList',
  components: {
    EmployeeComponent,
  },

  computed: {
    ...mapGetters('employees', ['getFilteredEmployeesList']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.employees {
  &__title {
    text-align: center;
    margin-bottom: 25px;
  }
  // .employees__header
  &__header {
    padding: 10px;
    font-weight: 700;
  }
  // .employees__item
  &__item {
    padding: 10px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  // .employees__list
  // &__list {
  // }
}
</style>
