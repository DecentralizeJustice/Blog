<template>

  <!-- <a href="https://www.w3schools.com"> -->
  <v-container grid-list-md text-xs-center v-if="posts != undefined">
  <v-layout row wrap>

    <v-flex v-for="post in posts" :key="post.id" xs4>
      <v-hover>
           <v-card
             slot-scope="{ hover }"
             class="mx-auto"
             color="grey lighten-4"

           >
           <v-img
             :aspect-ratio="1/1.5"
             :src= 'post.coverPhoto.url'
           >
             <v-expand-transition >
               <div
                 v-if="hover"
                 class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text hidden-md-and-down"
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
</v-container>

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
