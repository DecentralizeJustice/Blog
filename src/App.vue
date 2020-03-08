<template>
  <v-app>
    <v-app-bar
      dark
      app
      absolute
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1579591613/landingpage/croppedCoin.png"
          transition="scale-transition"
          width="50"
        />
        <div class=" display-4 title">
        Guiding Wallet
      </div>
      </div>

      <v-spacer></v-spacer>
      <div>
      <v-btn
        text
        href="https://guidingwallet.app"
      >
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        depressed color="grey darken-2"
      >
        <span class="mr-2">Blog</span>
        <v-icon>mdi-book-open-outline</v-icon>
      </v-btn>
    </div>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
