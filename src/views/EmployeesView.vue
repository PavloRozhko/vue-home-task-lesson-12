<template>
  <div class="employees-page">
    <div class="employees-page__filters">
      <filter-component />
    </div>
    <div class="employees-page__list">
      <employees-list />
    </div>
  </div>
</template>

<script>
import FilterComponent from '@/components/FilterComponent.vue'
import EmployeesList from '@/components/EmployeesList'
export default {
  name: 'EmployeesView',
  components: {
    EmployeesList,
    FilterComponent,
  },
}
</script>

<style lang="scss" scoped>
.employees-page {
  display: flex;
  column-gap: 20px;
  // .employees-page__filters
  &__filters {
    flex-basis: 20%;
  }
  // .employees-page__list
  &__list {
    flex-basis: 80%;
  }
}
</style>
