<template>
  <div style="width:100vw">
    <v-flex xs12 class="hidden-sm-and-down"  v-bind:style="style">
      <div style="top: 6%;left:5%;width:61.8%;color: white;text-align:left;position:absolute;"
         class="font-weight-bold" v-bind:class="titleClass" v-html="title">

      </div>
      <img
      data-aos="fade-up"
      :src="photo"
      style="bottom:4%;right:5%;position:absolute;height:50vh;width:auto;"/>
    </v-flex>
    <v-flex xs12 class="hidden-md-and-up" v-bind:style="styleMobile">
       <v-flex   class="justify-center" style="margin: auto; width:95%;">
         <p  style="position:relative;top:7vh;color:white;text-align:center;" v-bind:class="titleClassMobile" v-html="title">

         </p>
       </v-flex>
       <img
       class="pa-3"
       :src="photo"
        style="top:10vh;width:100vw;height:auto;left:0vw;position:relative;overflow:hidden;"/>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'titleandPhoto',
  props: ['title', 'photo', 'backgroundColor', 'size'],
  data () {
    return {
      style: {
        position: 'relative',
        height: '100vh',
        'background-color': this.backgroundColor
      },
      styleMobile: {
        position: 'relative',
        height: '90vh',
        'background-color': this.backgroundColor
      }
    }
  },
  computed: {
    // a computed getter
    titleClass: function () {
      let classes = 'display-'
      classes += this.size
      return classes
    },
    titleClassMobile: function () {
      let classes = ''
      const tlength = this.title.length
      switch (true) {
        case (tlength < 100) :
          classes += 'display-1'
          break
        case (tlength < 300) :
          classes += 'title'
          break
      }
      return classes
    }
  }
}
</script>

<style scoped>

</style>
