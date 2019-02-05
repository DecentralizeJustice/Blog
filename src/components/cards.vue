<template>

  <!-- <a href="https://www.w3schools.com"> -->

  <v-layout align-start row fill-height v-if="posts != undefined">
    <v-flex v-for="post in posts" :key="post.id" xs3 offset-xs1 class="mt-5 pt-1">
      <v-hover>
           <v-card
             slot-scope="{ hover }"
             class="mx-auto"
           >
           <v-img
             :aspect-ratio="9/16"
             :src= 'post.coverPhoto.url'
           >
             <v-expand-transition >
               <div
                 v-if="hover"
                 class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text hidden-sm-and-down text-xs-center"
                 style="height: 100%;"
               >
                {{ post.title }}
               </div>
             </v-expand-transition>
            </v-img>
          <v-card-text
             class="pt-4 hidden-md-and-up"
             style="position: relative;"
           >
             <h3 class="display-1 font-weight-light orange--text mb-2 " >{{ post.title }}</h3>
          </v-card-text>
           </v-card>
         </v-hover>
    </v-flex>
  </v-layout>

</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'cards',
  apollo: {
    posts: gql`{
      posts{
        coverPhoto {url}
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
