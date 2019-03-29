<template>

    <v-layout align-start row wrap style="overflow:hidden;" xs12 pa-0 ma-0 >
      <landingPage :title='articleInfo.landingPage.title'
        :subHeading='articleInfo.landingPage.subHeading'
        :background='articleInfo.landingPage.background'
        :color= 'articleInfo.landingPage.color' />

      <titleAndPhoto :title= 'articleInfo._1.title'
        :photo='articleInfo._1.photo'
        :backgroundColor='articleInfo.backgroundColor_1'/>

      <paragraphAnd2PhotoRight :paragraph='articleInfo._2.paragraph'
      :photos='articleInfo._2.photos'
      :backgroundColor1 ='articleInfo.backgroundColor_1'
      :backgroundColor2 ='articleInfo.backgroundColor_2'/>

        <!-- <v-flex xs12 class="hidden-sm-and-down"  style="position:relative;height:101vh;background-color: rgb(29, 66, 76);">
          <p style="position:relative;top: 8vh;width:85vw;color: white;text-align:left;left:8%;"
             class="font-weight-black display-2 quote" >
            If what I say now seems to be very reasonable, then I will have failed completely.
             Only if what I tell you appears absolutely unreasonable have we any chance of visualizing
             the future as it really will happen. <br>  - Arthur C. Clarke
          </p>
          <video
          muted loop autoplay
          data-aos="fade-up"
          src="https://media.giphy.com/media/11XWQAetk8DqLK/giphy.mp4"
          alt="Scary Driver" style="top:10vh;position:relative;left:40vw;height:auto;width:50vw;"/>
        </v-flex>
        <v-flex xs12 class="hidden-md-and-up" style="position:relative;height:80vh;background-color: rgb(29, 66, 76);">
           <v-flex   class="justify-center" style="margin: auto; width:100%;">
             <p style="position:relative;top: 8vh;width:90%;color: white;text-align:left;left:3%;font-size:1.5rem;line-height:1.8rem;"
                class="font-weight-black" >
               If what I say now seems to be very reasonable, then I will have failed completely.
                Only if what I tell you appears absolutely unreasonable have we any chance of visualizing
                the future as it really will happen. <br>  - Arthur C. Clarke
             </p>
           </v-flex>
           <video
           muted loop autoplay
           data-aos="fade-up"
           src="https://media.giphy.com/media/11XWQAetk8DqLK/giphy.mp4"
           alt="Scary Driver" style="top:10vh;width:100vw;height:auto;left:0vw;position:relative;overflow:hidden;"/>
        </v-flex>

        <v-flex xs12 class="hidden-sm-and-down"  style="position:relative;height:100vh;background-color: #486E70;">
          <section
          style="position:absolute;width:50%;top:50%;left:40vw;font-size:1.4rem;line-height:1.8rem;background-color:white;
          border-style:solid;border-color: rgb(29, 66, 76);border-width:1vh;padding:2vw;transform: translate(0%, -50%);" >
          <p>
            Innovative technology is weird because humans are weird. There is no way to predict the path that these technologies
           might take. For example, If i tried
            to convince a person from 2001 that the reality TV star Donald Trump would become president and use the internet as
            a platform to argue with Snoop Dog ,the gangster rapper, and Madonna ,the pop star, then they would most likely
            laugh in my face. People are weird and technology is weird. This weirdness means that the future is almost impossible to predict. We can't
            simply draw from past technologies to learn about the future. If we try and do this we will limit ourselves
            and risk sounding like the driver from ealier when these innovative technlogies are used commonly.
             Instead we should embrace this weirdness and unfamiliarity with a broad imagination and many questions. </p>

            It should be clear by now  that comparing innovative technologies to old technlogies isn’t the best thing to do, but people
            do this all the time with cryptocurrencies.
            We have all seen articles that compare bitcoin and cash. These articles usually compare things like
            security or transaction speed and volume and come to the conclusion that cryptocurrencies will never be that big because
            they don’t really compare to the current money that we have now. These people tend to make the mistake of comparing innovative technologies
            to past technologies. Instead of focusing on how cash is similar to bitcoin, it would be more enriching to focus on how they are different
            and the possibilities that exist in this differnce.
          </section>
          <div data-aos="fade-right"
          style="width:25%;position:absolute;top: 50%;left: 1%;transform: translate(0%, -50%);">
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Snoop_Dogg_%2821615809071%29.jpg"
          alt="Snoop Dogg"
          style="position:relative;left:7vw;height:auto;width:100%;"
          />
          <p style="position:relative;top:10%;left:8vw;">- Snoop Dogg by <a href="https://commons.wikimedia.org/wiki/File:Snoop_Dogg_(21615809071).jpg"
            target="_blank">TechCrunch</a></p>
        </div>
        </v-flex>
        <v-flex xs12 class="hidden-md-and-up" style="position:relative;height:100%;background-color: #486E70;">
          <section
          style="padding:2vw;position;relative;margin-top:2%;margin-bottom:2%;width:95vw;margin-left:2.5vw;
          font-size:1.2rem;line-height:1.5rem;background-color:white;
          border-style:solid;border-color: rgb(29, 66, 76);border-width: 1vh;" >
          <p>
            Innovative technology is weird because humans are weird. There is no way to predict the path that these technologies
           might take. For example, If i tried
            to convince a person from 2001 that the reality TV star Donald Trump would become president and use the internet as
            a platform to argue with Snoop Dog ,the gangster rapper, and Madonna ,the pop star, then they would most likely
            laugh in my face. People are weird and technology is weird. This weirdness means that the future is almost impossible to predict. We can't
            simply draw from past technologies to learn about the future. If we try and do this we will limit ourselves
            and risk sounding like the driver from ealier when these innovative technlogies are used commonly.
             Instead we should embrace this weirdness and unfamiliarity with a broad imagination and many questions. </p>

            It should be clear by now  that comparing innovative technologies to old technlogies isn’t the best thing to do, but people
            do this all the time with cryptocurrencies.
            We have all seen articles that compare bitcoin and cash. These articles usually compare things like
            security or transaction speed and volume and come to the conclusion that cryptocurrencies will never be that big because
            they don’t really compare to the current money that we have now. These people tend to make the mistake of comparing innovative technologies
            to past technologies. Instead of focusing on how cash is similar to bitcoin, it would be more enriching to focus on how they are different
            and the possibilities that exist in this differnce.
          </section>
          <video  muted loop autoplay   data-aos="fade-up"
          src="https://media.giphy.com/media/l0K3XTDR4lxtFVL9K/giphy.mp4"
          alt="Studying 2"
          style="top:50%;position:relative;left:0vw;height:auto;width:100vw;
            "
          />
        </v-flex>

        <v-flex xs12 class="hidden-sm-and-down"  style="position:relative;height:100vh;background-color: rgb(29, 66, 76);">
          <section
          style="position:absolute;width:50%;left:5vw;font-size:1.4rem;line-height:1.8rem;background-color:white;
          border-style:solid;border-color:#486E70; border-width:1vh;padding:2vw;transform: translate(0%, -50%);top: 50%;" >
          <p>We should focus on how weird bitcoin and ethereum is compared to old tech and how
            they will be different in the future, when compared to old tech. It is almost impossible to try and predict the specifics
            of future technologies, but we can imagine what they might look like. The process of imagining instead of
            predicting the future, unburdens us from having to be right and looking to history to support our statements.
            Imagining instead allows us to explore infinite possibilites, granting us the complete freedom to dream. These dreams
            may be weird and unfamiliar, and they should be.
          We should embrace the weirdness of these new ideas and allow them to expand our understanding of the future and
          ourselves, instead of trying to fit cryptocurrencies into our current
          understanding of the world. We owe cryptocurrencies and ourselves the freedom to imagine.</p>

          I want us to have more weird and imaginative conversations and less conversations focusing on the relatively mundane advancements.
          There are a million articles about how cryptocurrencies will
          make moving money faster, but very few on how decentralized organizations will change what it means to be human or how a
          microtransaction focused economy could be a more equitable
           way to distribute value. These types of conversations exist in certain communties and contexts,
            such as futurist writings and queer theory, but I hope that we can have more imaginative and unbound
            conversations everday.  We should let go of the past and  stop trying to predict the future.
            We need to dream and imagine bigger things because the only
            thing that truly limits our future is our collective
            imagination about what the future could be.
          </section>
          <img     data-aos="fade-left"
          src="https://media1.tenor.com/images/88d89612db5eaacc6c9c6ac6bf6cd6e7/tenor.gif?itemid=7715402"
          alt="Black man thinking meme"
          style="top:50%;transform: translate(0%, -50%);position:absolute;left:60vw;height:auto;width:34%;
            padding:0%;"
          >
        </v-flex>
        <v-flex xs12 class="hidden-md-and-up" style="position:relative;height:100%;background-color:rgb(29, 66, 76); ">
          <section
          style="padding:2vw;position;relative;margin-top:2%;margin-bottom:2%;width:95vw;margin-left:2.5vw;
          font-size:1.2rem;line-height:1.5rem;background-color:white;
          border-style:solid;border-color:#486E70; border-width: 1vh;" >
          <p> We should focus on how weird bitcoin and ethereum is compared to old tech and how
              they will be different in the future, when compared to old tech. It is almost impossible to try and predict the specifics
              of future technologies, but we can imagine what they might look like. The process of imagining instead of
              predicting the future, unburdens us from having to be right and looking to history to support our statements.
              Imagining instead allows us to explore infinite possibilites, granting us the complete freedom to dream. These dreams
              may be weird and unfamiliar, and they should be.
            We should embrace the weirdness of these new ideas and allow them to expand our understanding of the future and
            ourselves, instead of trying to fit cryptocurrencies into our current
            understanding of the world. We owe cryptocurrencies and ourselves the freedom to imagine.</p>

            I want us to have more weird and imaginative conversations and less conversations focusing on the relatively mundane advancements.
            There are a million articles about how cryptocurrencies will
            make moving money faster, but very few on how decentralized organizations will change what it means to be human or how a
            microtransaction focused economy could be a more equitable
             way to distribute value. These types of conversations exist in certain communties and contexts,
              such as futurist writings and queer theory, but I hope that we can have more imaginative and unbound
              conversations everday.  We should let go of the past and  stop trying to predict the future.
              We need to dream and imagine bigger things because the only
              thing that truly limits our future is our collective
              imagination about what the future could be.
          </section>
          <img     data-aos="fade-up"
          src="https://media1.tenor.com/images/88d89612db5eaacc6c9c6ac6bf6cd6e7/tenor.gif?itemid=7715402"
          alt="Studying 2"
          style="top:50%;position:relative;left:0vw;height:auto;width:100vw;"
          >
        </v-flex> -->

    </v-layout >

</template>

<script>
import articleInfo from '@/components/embraceWeirdness/data.js'
import landingPage from '@/components/articleComponents/landingPage.vue'
import titleAndPhoto from '@/components/articleComponents/titleAndPhoto.vue'
import paragraphAnd2PhotoRight from '@/components/articleComponents/paragraphAnd2PhotoRight.vue'
export default {
  name: 'embraceWeirdness',
  components: {
    landingPage,
    titleAndPhoto,
    paragraphAnd2PhotoRight
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
.firstcharacter {
  float: left;
  font-family: Georgia;
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}
</style>
