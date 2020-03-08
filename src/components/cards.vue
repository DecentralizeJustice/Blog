<template>

  <v-layout align-start row wrap v-if="posts != undefined" pt-2 >
    <v-flex v-for="post in posts" :key="post.id" xs10 md3 mt-1 mb-1  offset-xs1 class="cardSpace">
      <router-link :to= "post.routerlink">
           <v-card
             class="mx-auto"
             color="black"
           >
           <v-img
             :aspect-ratio="9/12"
             :src= 'post.coverPhoto.url'
           >
            </v-img>
          <v-card-text
             class="pt-4"
             style="position: relative;"
           >
             <h3 class="display-1 font-weight-light orange--text mb-2 " >
               {{ post.title }}
             </h3>
          </v-card-text>
           </v-card>
         </router-link>
    </v-flex>
  </v-layout>

</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'cards',
  apollo: {
    posts: gql`{
      posts(
        where: { status: PUBLISHED }
        orderBy: updatedAt_DESC,
      ){
        coverPhoto {url}
        title,
        routerlink
        status
      }
    }`
  },
  data () {
    return {
    }
  }
  // updated () {
  //   console.log(this.posts) // I'm text inside the component.
  // }
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
