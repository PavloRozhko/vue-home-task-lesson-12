<template>
  <div class="interview-page">
    <interviews-creator class="interview-page__creator" />
    <interviews-list class="interview-page__list" />
  </div>
</template>

<script>
import InterviewsList from '@/components/InterviewList'
import InterviewsCreator from '@/components/InterviewsCreator'
export default {
  name: 'InterviewsPage',
  components: {
    InterviewsList,
    InterviewsCreator,
  },
}
</script>

<style lang="scss" scoped>
.interview-page {
  display: flex;
  column-gap: 15px;
  // .interview-page__creator
  &__creator {
    flex-basis: 20%;
  }
  // .interview-page__list
  &__list {
    flex-basis: 80%;
  }
}
</style>
