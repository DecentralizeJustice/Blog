<template>
  <div>
  <v-toolbar>
    <v-toolbar-title>Multisig Crypto</v-toolbar-title>
  </v-toolbar>

  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            Embrace Friction
          </div>
        </v-expand-transition>
      </v-img>

    </v-card>
  </v-hover>
  </div>
</template>

<script>
export default {
  name: 'BlogHome'
}
</script>

<style scoped>
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>
