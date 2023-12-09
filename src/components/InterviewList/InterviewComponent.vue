<template>
  <div class="interview">
    <div class="interview__employee">{{ interviewData.employeeName }}</div>
    <div class="interview__candidate">{{ interviewData.candidateName }}</div>
    <div class="interview__day">{{ interviewData.dayTitle }}</div>
    <div class="interview__action">
      <button class="interview__btn" @click="deleteInterview(interviewData.id)">
        <span class="interview__icon material-symbols-outlined"> delete </span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'InterviewComponent',

  props: {
    interviewData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('interviews', ['deleteInterview']),
  },
}
</script>

<style lang="scss" scoped>
.interview {
  position: relative;
  // .interview__action
  &__action {
    position: absolute;
    top: 0;
    right: 0;
  }
  // .interview__icon
  &__icon {
    font-size: inherit;
    color: red;
    transition: all 0.3s ease 0s;
    &:hover {
      transform: scale(1.2);
    }
  }
  // .interview__btn
  // &__btn {
  // }
  // .interview__employee
  // &__employee {
  // }
  // .interview__candidate
  // &__candidate {
  // }
  // .interview__day
  // &__day {
  // }
}
</style>
