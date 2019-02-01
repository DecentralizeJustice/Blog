<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
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
           src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
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

export default {
  name: 'BlogHome',
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
