<template>
  <div style="width:100vw">

    <v-flex xs12 class="hidden-sm-and-down background"  :style="styleBackground">
      <div class="norm"
      :style="styleBorderColor">
      <h2 class="customTitle text-center  mb-3 display-2">{{title}}</h2>
      <section class="firstcharacter"
       v-html="paragraph"
      >
      </section>
      <v-img :src="imgUrl" class="text-center" style="width:40%;margin-left: auto;
  margin-right: auto;"></v-img>
      </div>

    </v-flex>

    <v-flex xs12 class="hidden-md-and-up mobilebackground" :style="styleBackground">
      <div class="mobileText ">
      <h2 class="customTitle text-center  mb-3">{{title}}</h2>
      <section class="firstcharacter" v-html="paragraph">
      </section>
      <v-img :src="imgUrl" class="text-center" style="width:75%;margin-left: auto;
  margin-right: auto;"></v-img>
      </div>
    </v-flex>

  </div>
</template>

<script>
export default {
  name: 'paragraph',
  props: {
    paragraph: String,
    imgUrl: String,
    title: {
      type: String,
      default: ''
    },
    backgroundColor1: {
      type: String
    },
    backgroundColor2: {
      type: String
    }
  },
  data () {
    return {
      styleBackground: {
        'background-color': this.backgroundColor2
      },
      styleBorderColor: {
        'border-color': this.backgroundColor1,
        'margin-bottom': '2%'
      }
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style scoped>
.customTitle{
  font-size:2rem;
  line-height:2rem;
}
.firstcharacter  >>> span {
    float: left;
    font-family: Georgia;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
}
.norm {
  padding:2vw;position:relative;margin-bottom:2.5%;width:60vw;height: auto;margin-left:20vw;
  font-size:1.4rem;line-height:1.8rem;background-color:white;
  border-style:solid;border-width: 1vh;
}
.mobilePhoto {
  position:relative;bottom:2%;width:100vw;height: auto;
}
.background{
  position: relative;
  height: 100%;
  padding-top: 2.5%;
  padding-bottom: 1%;
}
.mobilebackground{
  position:relative;
  height:100%;
  padding-top:2%;
  padding-bottom: 1%;
}
.mobileText{
  padding:2vw;
  position:relative;
  margin-bottom:2%;
  width:95vw;
  margin-left:2.5vw;
  font-size:1.4rem;
  line-height:1.5rem;
  background-color:white;
}
</style>
