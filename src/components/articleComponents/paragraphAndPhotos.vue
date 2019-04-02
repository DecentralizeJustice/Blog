<template>
  <div style="width:100vw">

    <v-flex xs12 class="hidden-sm-and-down background"  :style="styleBackground">
      <section
      class="firstcharacter" v-bind:class="paragraphClass"
      :style="styleBorderColor" v-html="paragraph"
      >

      </section>
      <img data-aos="fade-left"
      :src="photos[0]"
      :style="photoClass"
      >
    </v-flex>

    <v-flex xs12 class="hidden-md-and-up mobilebackground" :style="styleBackground">
      <section
      :style="styleBorderColor" class="mobileText firstcharacter" v-html="paragraph">

      </section>
      <img data-aos="fade-left"
      :src="photos[0]"
      class="mobilePhoto"
      >
    </v-flex>

  </div>
</template>

<script>
export default {
  name: 'paragraphAndPhotos',
  props: {
    paragraph: String,
    photos: Array,
    backgroundColor1: {
      type: String
    },
    backgroundColor2: {
      type: String
    },
    flip: {
      type: Boolean,
      default: false
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
      },
      stylePhoto: {
        'position': 'absolute',
        'right': '4.5vw',
        'height': 'auto',
        'width': '35vw',
        'top': '50%',
        '-ms-transform': 'translateY(-50%)',
        'transform': 'translateY(-50%)'
      },
      stylePhotoFlipped: {
        'position': 'absolute',
        'left': '4.5vw',
        'height': 'auto',
        'width': '35vw',
        'top': '50%',
        '-ms-transform': 'translateY(-50%)',
        'transform': 'translateY(-50%)'
      }
    }
  },
  computed: {
    // a computed getter
    paragraphClass: function () {
      if (this.flip) {
        return 'flipped'
      }
      return 'norm'
    },
    photoClass: function () {
      if (this.flip) {
        return this.stylePhotoFlipped
      }
      return this.stylePhoto
    }
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
  padding:2vw;position:relative;margin-bottom:2.5%;width:50vw;height: auto;margin-left:5vw;
  font-size:1.4rem;line-height:1.8rem;background-color:white;
  border-style:solid;border-width: 1vh;
}
.mobilePhoto {
  position:relative;bottom:2%;width:100vw;height: auto;
}
.flipped {
  padding:2vw;position:relative;margin-bottom:2.5%;width:50vw;height: auto;margin-left:45vw;
  font-size:1.4rem;line-height:1.8rem;background-color:white;
  border-style:solid;border-width: 1vh;
}
.background{
  position: relative;
  height: 100%;
  padding-top: 2.5%;
}
.mobilebackground{
  position:relative;
  height:100%;
  padding-top:2%;
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
