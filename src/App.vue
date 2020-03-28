<template>
  <v-app style="">
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
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1585333867/croppedCoin.png"
          transition="scale-transition"
          width="50"
        />
        <div class=" display-4 title">
        Guiding Wallet
      </div>
      </div>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up"
      @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn
        :color='item.color'
        v-bind:class="[buttonObject]"
        v-for="item in opts"
          :key="`${item.title}`"
        :href='item.link'
      >
        <span class="">{{item.title}}</span>
        <v-icon right>mdi-{{item.icon}}</v-icon>
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
      dark
    >
      <template v-slot:prepend >
        <v-list>
          <v-list-item
            one-line
          >
            <v-list-item-content>
              <v-list-item-title class="title">Guiding Wallet</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item link v-for="item in opts"
          :key="`${item.icon}`"
          :href='item.link'
        >
          <v-list-item-icon >
            <v-icon>mdi-{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
  dark
  padless
>
  <v-card
    flat
    tile
    color='rgb(29, 66, 76)'
    class="white--text text-center"
    style="width:100%;"
  >
    <v-card-text>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 white--text"
        icon
        href='https://twitter.com/GuidingWallet' link=true
      >
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} — <strong>Guiding Wallet</strong>
    </v-card-text>
  </v-card>
</v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    buttonObject: 'hidden-sm-and-down mr-2',
    drawer: null,
    icons: [
      'mdi-twitter'
    ],
    opts: [
      { title: 'Home', icon: 'home', link: 'https://guidingwallet.app', color: 'grey darken-3' },
      { title: 'Blog', icon: 'book-open-outline', color: 'grey', link: 'https://guidingwallet.app/blog' },
      { title: 'Download', icon: 'download', color: 'grey darken-3', link: 'https://guidingwallet.app#Download' }
    ]
  })
}
</script>
<style scoped>

</style>
