<template>
  <div class="interview-creator">
    <h2 class="interview-creator__title">Призначення співбесід</h2>
    <div class="interview-creator__container">
      <div class="interview-creator__item">
        <label for="employee">Співробітник</label>
        <select id="employee" v-model="interview.employeeId">
          <option v-for="employee in getEmployeesList" :key="employee.id" :value="employee.id">
            {{ employee.name }}
          </option>
        </select>
      </div>
      <div class="interview-creator__item">
        <label for="candidate">Кандидат</label>
        <select id="candidate" v-model="interview.candidateId">
          <option v-for="candidate in getCandidatesList" :key="candidate.id" :value="candidate.id">
            {{ candidate.name }}
          </option>
        </select>
      </div>
      <div class="interview-creator__item">
        <label for="day">День тижня</label>
        <select id="day" v-model="interview.dayId">
          <option v-for="day in days" :key="day.id" :value="day.id">{{ day.title }}</option>
        </select>
      </div>
      <div class="interview-creator__action">
        <button class="interview-creator__btn" @click="onAdd">Додати співбесіду</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { days } from './settings'

export default {
  name: 'InterviewsCreator',

  data() {
    return {
      interview: {},
    }
  },

  computed: {
    ...mapGetters('employees', ['getEmployeesList']),
    ...mapGetters('candidates', ['getCandidatesList']),
    days() {
      return days
    },
  },

  methods: {
    ...mapActions('interviews', ['addNewInterview']),
    onAdd() {
      this.addNewInterview(this.interview)
    },
  },
}
</script>

<style lang="scss" scoped>
.interview-creator {
  // .interview-creator__title
  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  // .interview-creator__container
  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
  // .interview-creator__item
  &__item {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    select {
      height: 25px;
      border: 1px solid #000;
    }
  }
  // .interview-creator__action
  &__action {
    text-align: center;
  }
  // .interview-creator__btn
  &__btn {
    padding: 10px 25px;
    background-color: #158b15;
    transition: all 0.3s ease 0s;
    color: #fff;
    &:hover {
      background-color: #1b721b;
    }
  }
}
</style>
