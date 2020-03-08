<template>
  <v-flex class="back" xs12>
    <cards/>
  </v-flex>
</template>

<script>
import cards from '@/components/cards.vue'
export default {
  name: 'BlogHome',
  components: {
    cards
  }
}
</script>

<style scoped>
.back {
  background-color: rgba(30, 102, 102);
  height:100%;
}
</style>
