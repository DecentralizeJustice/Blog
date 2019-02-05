<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Multisig Crypto</v-toolbar-title>
    </v-toolbar>
    <cards/>
  </div>
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

</style>
