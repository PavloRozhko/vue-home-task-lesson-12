<template>
  <div class="candidates">
    <candidates-list class="candidates__list" />
  </div>
</template>

<script>
import CandidatesList from '@/components/CandidatesList'
export default {
  name: 'CandidatesView',

  components: {
    CandidatesList,
  },
}
</script>

<style lang="scss" scoped></style>
