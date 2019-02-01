<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Multisig Crypto</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-hover>
  <v-card
    slot-scope="{ hover }"
    class="mx-auto"
    color="grey lighten-4"
    max-width="600"
  >
    <v-img
      :aspect-ratio="1.6180/1"
      src="https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <v-expand-transition>
        <div
          v-if="hover"
          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
          style="height: 100%;"
        >
          1
        </div>
      </v-expand-transition>
    </v-img>
    <v-card-text
      class="pt-4"
      style="position: relative;"
    >

      <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
      <h3 class="display-1 font-weight-light orange--text mb-2">oking utensils</h3>
      <div class="font-weight-light title mb-2">
        ccccef.<br>

      </div>
    </v-card-text>
  </v-card>
</v-hover>
    </v-content>
  </v-app>
</template>

<script>


  export default {
    name: 'BlogHome',
  }
</script>
<style>
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>
