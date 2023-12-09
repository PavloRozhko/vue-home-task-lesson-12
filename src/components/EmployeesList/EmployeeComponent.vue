<template>
  <div class="employee">
    <div class="employee__name">{{ employeeData.name }}</div>
    <div class="employee__age">{{ employeeData.age }} років</div>
    <div class="employee__position">{{ employeeData.position }}</div>
    <div class="employee__experience">{{ employeeData.experience }} років</div>
    <div class="employee__actions">
      <button @click="deleteEmployee(employeeData.id)">
        <span class="employee__icon employee__icon--delete material-symbols-outlined"> delete </span>
      </button>
      <button @click="onEdit(employeeData.id)">
        <span class="employee__icon employee__icon--edit material-symbols-outlined"> edit </span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EmployeeComponent',

  props: {
    employeeData: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions('employees', ['deleteEmployee']),
    onEdit(id) {
      this.$router.push({
        name: 'employee',
        params: {
          employeeId: id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.employee {
  position: relative;
  // .employee__actions
  &__actions {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(50%);
    display: inline-flex;
    gap: 10px;
  }
  // .employee__icon
  &__icon {
    font-size: inherit;
    transition: all 0.3s ease 0s;
    &:hover {
      transform: scale(1.2);
    }
  }
  // .employee__icon--edit
  &__icon--edit {
    color: green;
  }
  // .employee__icon--delete
  &__icon--delete {
    color: red;
  }
  // .employee__name
  // &__name {
  // }
  // .employee__age
  // &__age {
  // }
  // .employee__position
  // &__position {
  // }
  // .employee__experience
  // &__experience {
  // }
}
</style>
