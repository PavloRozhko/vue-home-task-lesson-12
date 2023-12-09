<template>
  <div class="interviews">
    <h1 class="interviews__title">Список призначених співбесід</h1>
    <div class="interviews__container">
      <div class="interviews__list">
        <div class="interviews__header">
          <div>Працівник</div>
          <div>Кандидат</div>
          <div>День тижня</div>
        </div>
        <interview-component
          v-for="interview in getFilledInterviewsList"
          :key="interview.id"
          :interview-data="interview"
          class="interviews__item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InterviewComponent from './InterviewComponent.vue'
export default {
  name: 'InterviewsList',
  components: {
    InterviewComponent,
  },
  computed: {
    ...mapGetters('interviews', ['getFilledInterviewsList']),
  },
}
</script>

<style lang="scss" scoped>
.interviews {
  // .interviews__container
  &__container {
    max-width: 1000px;
    margin: 0 auto;
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
    text-transform: uppercase;
  }
  // .interviews__header
  &__header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    font-weight: 700;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 15px;
  }
  // .interviews__item
  &__item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  // .interviews__list
  // &__list {
  // }
}
</style>
