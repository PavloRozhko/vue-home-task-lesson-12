<template>
  <div class="candidate-creator">
    <h1 class="candidate-creator__title main-title">Додати нового кандидата</h1>
    <div class="candidate-creator__items form">
      <div class="candidate-creator__item form__item">
        <label for="candidate-name">Ім'я</label>
        <input id="candidate-name" v-model="candidate.name" type="text" />
      </div>
      <div class="candidate-creator__item form__item">
        <label for="candidate-age">Вік</label>
        <input id="candidate-age" v-model="candidate.age" type="number" />
      </div>
      <div class="candidate-creator__item form__item">
        <label for="candidate-position">Посада</label>
        <input id="candidate-position" v-model="candidate.position" type="text" />
      </div>
      <div class="candidate-creator__item form__item">
        <label for="candidate-experience">Досвід</label>
        <input id="candidate-experience" v-model="candidate.experience" type="number" />
      </div>
      <div class="candidate-creator__actions form__action">
        <button class="form__btn form__btn--add" @click="onAdd">Додати</button>
        <button class="form__btn form__btn--cancel" @click="onCancel">Скасувати</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CandidateCreator',

  data() {
    return {
      candidate: {},
    }
  },

  methods: {
    ...mapActions('candidates', ['addNewCandidate']),
    onAdd() {
      this.addNewCandidate(this.candidate)

      this.$router.push({
        name: 'candidates',
      })
    },
    onCancel() {
      this.$router.push({
        name: 'candidates',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.candidate-creator {
  // .candidate-creator__title
  &__title {
    margin-bottom: 25px;
  }
}
</style>
