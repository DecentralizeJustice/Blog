<template>
  <v-container fluid v-if="posts != undefined">
    <v-row
      no-gutters
      justify='center'
      justify-md='start'
    >
    <v-col
        v-for="post in posts" :key="post.id"
        md='3'
        offset-md='1'
        cols='10'
      >
      <router-link :to= "post.routerlink" >
           <v-card
             class=""
             color="grey darken-4"
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
             <h3 class="display-1 font-weight-light white--text mb-2 text-center" >
               {{ post.title }}
             </h3>
          </v-card-text>
           </v-card>
         </router-link>
       </v-col>
    </v-row>
  </v-container>
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
