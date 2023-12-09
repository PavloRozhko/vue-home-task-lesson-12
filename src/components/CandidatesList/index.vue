<template>
  <div class="candidates">
    <h1 class="candidates__title main-title">Список кандидатів</h1>
    <div class="candidates__container">
      <div class="candidates__list">
        <div class="candidates__header grid">
          <div>Ім'я кандидата</div>
          <div>Вік кандидата</div>
          <div>Посада кандидата</div>
          <div>Досвід кандидата</div>
        </div>
        <candidate-component
          v-for="candidate in getCandidatesList"
          :key="candidate"
          :candidate-data="candidate"
          class="candidates__item grid"
        />
      </div>
      <div class="candidates__action">
        <router-link :to="{ name: 'new-candidate' }">Новий кандидат</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CandidateComponent from './CandidateComponent.vue'

export default {
  name: 'CandidatesList',

  components: {
    CandidateComponent,
  },

  computed: {
    ...mapGetters('candidates', ['getCandidatesList']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.candidates {
  // .candidates__title
  &__title {
    margin-bottom: 25px;
  }
  &__container {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 15px;
    align-items: baseline;
  }
  // .candidates__list
  &__list {
    flex-basis: 85%;
  }
  &__action {
    flex-basis: 15%;
    a {
      padding: 10px 25px;
      background-color: #008000;
      color: #fff;
      transition: all 0.3s ease 0s;
      &:hover {
        background-color: #0d5a0d;
      }
    }
  }
  // .candidates__item
  &__item {
    padding: 10px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  // .candidates__header
  &__header {
    padding: 10px;
    font-weight: 700;
  }
}
</style>
