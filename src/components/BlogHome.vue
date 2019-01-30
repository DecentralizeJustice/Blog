<template>
  <div>
  <v-toolbar>
    <v-toolbar-title>Multisig Crypto</v-toolbar-title>
  </v-toolbar>
  <a href="https://www.w3schools.com">
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
            class="d-flex transition-slow-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            <div>{{ hello }}</div>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
          class="pt-4 hidden-md-and-up"
          style="position: relative;"
        >
          <div>{{ hello }}</div>
          <!-- <h3 class="display-1 font-weight-light orange--text mb-2">Embrace Friction</h3> -->

        </v-card-text>
    </v-card>
  </v-hover>
  </a>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'BlogHome',
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`{
      User(id: "wk0z1j1tzj7xc0116is3ckdrx") {

    firstName

  }
    }`
  }
}
</script>

<style scoped>
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .9;
position: absolute;
width: 100%;
}
a {
  color: none;
  text-decoration: none; /* no underline */
}
</style>
