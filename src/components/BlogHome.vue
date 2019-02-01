<template>
  <div>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
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
           :aspect-ratio="16/9"
           :src= 'post.coverPhoto.url'
         >
           <v-expand-transition>
             <div
               v-if="hover"
               class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
               style="height: 100%;"
             >
               $14.99
             </div>
           </v-expand-transition>
         </v-img>
         <v-card-text
           class="pt-4"
           style="position: relative;"
         >
           <v-btn
             absolute
             color="orange"
             class="white--text"
             fab
             large
             right
             top
           >
             <v-icon>mdi-cart</v-icon>
           </v-btn>
           <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
           <h3 class="display-1 font-weight-light orange--text mb-2">QW cooking utensils</h3>
           <div class="font-weight-light title mb-2">
             Our Vintage kitchen utensils delight any chef.<br>
             Made of bamboo by hand
           </div>
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
