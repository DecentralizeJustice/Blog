<template>

    <v-layout align-start row wrap style="overflow:hidden;" xs12 pa-0 ma-0 >
      <landingPage :title='articleInfo.landingPage.title'
        :subHeading='articleInfo.landingPage.subHeading'
        :background='articleInfo.landingPage.background'
        :color= 'articleInfo.landingPage.color' />

      <titleAndPhoto :title= 'articleInfo._1.title'
        :photo='articleInfo._1.photo'
        :backgroundColor='articleInfo.backgroundColor_1'/>

      <paragraphAndPhotos :paragraph='articleInfo._2.paragraph'
      :photos='articleInfo._2.photos'
      :backgroundColor1 ='articleInfo.backgroundColor_1'
      :backgroundColor2 ='articleInfo.backgroundColor_2'/>

      <titleAndPhoto :title= 'articleInfo._3.title'
        :photo='articleInfo._3.photo'
        :backgroundColor='articleInfo.backgroundColor_1'/>

      <paragraphAndPhotos :paragraph='articleInfo._4.paragraph'
      :photos='articleInfo._4.photos'
      :backgroundColor1 ='articleInfo.backgroundColor_1'
      :backgroundColor2 ='articleInfo.backgroundColor_2'/>

      <paragraphAndPhotos :paragraph='articleInfo._5.paragraph'
      :photos='articleInfo._5.photos'
      :backgroundColor1 ='articleInfo.backgroundColor_2'
      :backgroundColor2 ='articleInfo.backgroundColor_1'
      :flip ='true'/>

    </v-layout >

</template>

<script>
import articleInfo from '@/components/embraceWeirdness/data.js'
import landingPage from '@/components/articleComponents/landingPage.vue'
import titleAndPhoto from '@/components/articleComponents/titleAndPhoto.vue'
import paragraphAndPhotos from '@/components/articleComponents/paragraphAndPhotos.vue'
export default {
  name: 'embraceWeirdness',
  components: {
    landingPage,
    titleAndPhoto,
    paragraphAndPhotos
  },
  data () {
    return {
      articleInfo: articleInfo
    }
  }
}
</script>
<!-- styling for the component -->
<style scoped>
a {
  color: black;
  text-decoration: none; /* no underline */
}
</style>
