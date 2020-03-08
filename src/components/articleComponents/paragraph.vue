<template>
  <div style="width:100vw">

    <v-flex xs12 class="hidden-sm-and-down background"  :style="styleBackground">
      <section
      class="firstcharacter norm"
      :style="styleBorderColor" v-html="paragraph"
      >

      </section>
    </v-flex>

    <v-flex xs12 class="hidden-md-and-up mobilebackground" :style="styleBackground">
      <section
      :style="styleBorderColor" class="mobileText firstcharacter" v-html="paragraph">

      </section>
    </v-flex>

  </div>
</template>

<script>
export default {
  name: 'paragraph',
  props: {
    paragraph: String,
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
  }
}
</script>

<style scoped>
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
  font-size:1.2rem;
  line-height:1.5rem;
  background-color:white;
  border-style:solid;
  border-width: 1vh;
}
</style>
