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
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1579591613/landingpage/croppedCoin.png"
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
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    buttonObject: 'hidden-sm-and-down mr-2',
    drawer: null,
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
