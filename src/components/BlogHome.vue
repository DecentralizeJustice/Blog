<template>
  <div>
  <v-toolbar>
    <v-toolbar-title>Multisig Crypto</v-toolbar-title>
  </v-toolbar>
  <!-- <a href="https://www.w3schools.com"> -->
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >

      <v-img
        :aspect-ratio="2/3"
        :src= 'post.coverPhoto.url'
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-slow-in-fast-out orange darken-2  display-3 white--text"
            style="height: 100%;"
            id = 'gjhgjgjgjjj'
          >
          {{ post.title }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
          class="pt-4 hidden-md-and-up"
          style="position: relative;"
        >
          <h3 class="display-1 font-weight-light orange--text mb-2" v-if="post == undefined">Test</h3>
          <h3 class="display-1 font-weight-light orange--text mb-2" v-else>{{ post.title }}</h3>
        </v-card-text>
    </v-card>
  </v-hover>
  <!-- </a> -->
  </div>

</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'BlogHome',

  apollo: {
    post: gql`{
      post(where: {id: "cjrg2t0z7b9u30a23puhi9gxk"}) {
         coverPhoto {
           url
         }
         title
      }
    }`
  },
  data () {
    return {
      tests: ''
    }
  }
}
</script>

<style >
#gjhgjgjgjjj {
align-items: center !important;
bottom: 0;
justify-content: center !important;
opacity: .9;
position: absolute !important;
width: 100%;
}
a {
  color: none;
  text-decoration: none; /* no underline */
}
</style>
