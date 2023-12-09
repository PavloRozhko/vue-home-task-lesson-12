<template>
  <div class="candidate">
    <div class="candidate__name">{{ candidateData.name }}</div>
    <div class="candidate__age">{{ candidateData.age }} років</div>
    <div class="candidate__position">{{ candidateData.position }}</div>
    <div class="candidate__experience">{{ candidateData.experience }} років</div>
    <div class="candidate__actions">
      <button @click="deleteCandidate(candidateData.id)">
        <span class="candidate__icon candidate__icon--delete material-symbols-outlined"> delete </span>
      </button>
      <button @click="onAdd(candidateData.id)">
        <span class="candidate__icon candidate__icon--add material-symbols-outlined"> add </span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CandidateComponent',

  props: {
    candidateData: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions('candidates', ['deleteCandidate']),

    onAdd(id) {
      this.$router.push({
        name: 'candidate',
        params: {
          candidateId: id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.candidate {
  position: relative;
  // .candidate__actions
  &__actions {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(50%);
    display: inline-flex;
    gap: 10px;
  }
  // .candidate__icon
  &__icon {
    font-size: inherit;
    transition: all 0.3s ease 0s;
    &:hover {
      transform: scale(1.2);
    }
  }
  // .candidate__icon--delete
  &__icon--delete {
    color: red;
  }
  // .candidate__icon--edit
  &__icon--add {
    color: green;
  }
  // .candidate__name
  // &__name {
  // }
  // .candidate__age
  // &__age {
  // }
  // .candidate__position
  // &__position {
  // }
  // .candidate__experience
  // &__experience {
  // }
}
</style>
