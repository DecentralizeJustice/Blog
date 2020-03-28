<template>
  <v-flex class="back" xs12 style="min-height:90vh;">
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
  background-image: linear-gradient(to bottom, rgb(29, 66, 76) , #486E70);
  height:100%;
}
</style>
