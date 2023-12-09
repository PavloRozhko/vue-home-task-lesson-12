<template>
  <div class="filter">
    <h2 class="filter__title">Фільтри</h2>
    <div class="filter__items">
      <div class="filter__item">
        <label for="name">Ім'я</label>
        <input id="name" v-model="filter.name" type="text" />
      </div>
      <div class="filter__item range-item">
        <div class="range-item__input">
          <label for="age-from">Вік від</label>
          <input id="age-from" v-model="filter.ageFrom" type="number" />
        </div>
        <div class="range-item__input">
          <label for="age-to">Вік до</label>
          <input id="age-to" v-model="filter.ageTo" type="number" />
        </div>
      </div>
      <div class="filter__item">
        <label for="position">Посада</label>
        <input id="position" v-model="filter.position" type="text" />
      </div>
      <div class="filter__item range-item">
        <div class="range-item__input">
          <label for="experience">Досвід від</label>
          <input id="experience" v-model="filter.experienceFrom" type="number" />
        </div>
        <div class="range-item__input">
          <label for="experience">Досвід до</label>
          <input id="experience" v-model="filter.experienceTo" type="number" />
        </div>
      </div>
    </div>
    <div class="filter__action">
      <button @click="onReset">Скинути фільтри</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FilterComponent',

  data() {
    return {
      filter: {},
    }
  },

  watch: {
    filter: {
      handler(newFilterValue) {
        this.setFilter(newFilterValue)
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions('employees', ['setFilter']),
    onReset() {
      this.filter = {}
    },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  // .filter__title
  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  // .filter__item
  &__item {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    input {
      padding: 0 5px;
      height: 25px;
      border: 1px solid #000;
    }
  }
  // .filter__action
  &__action {
    text-align: center;
    button {
      padding: 10px 20px;
      background-color: sandybrown;
    }
  }
  // .filter__items
  // &__items {
  // }
}
.range-item {
  flex-direction: row;
  column-gap: 10px;
  // .range-item__input
  &__input {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
}
</style>
