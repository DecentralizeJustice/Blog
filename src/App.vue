<template>
  <v-app>
    <v-app-bar
      dark app
      absolute
    >
      <div class="d-flex align-center">
        <v-img
          alt="Guiding Wallet Logo"
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

      <v-btn
        href="https://github.com/DecentralizeJustice/GuideWallet-DesktopApp"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
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
