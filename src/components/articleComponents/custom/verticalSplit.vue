<template>

  <v-row no-gutters :style="{ 'background-color': optsArray[0].color }">
      <v-col
        cols="5"
        class="half"
      >
      <v-card
        class='transparent justify-center top-set'
        outlined
        tile
        style=""
      >
      <v-card-title
      class="display-4 font-weight-medium text-center black--text pa-4 text-wrap justify-center"
      style="overflow-wrap: break-word">
       {{optsArray[0].text}}
     </v-card-title>
      </v-card>
      </v-col>
      <v-col
        cols="2"
        class="half"
      >
      <v-card
        class='transparent justify-center middle-set'
        outlined
        tile
        style=""
      >
      <v-card-title
      class="display-3 font-weight-medium text-center grey--text pa-4 text-wrap justify-center"
      style="overflow-wrap: break-word">
       VS
     </v-card-title>
      </v-card>
      </v-col>
      <v-col
        cols="5"
        class="half"
      >
      <v-card
        class='transparent justify-center bottom-set'
        outlined
        tile
        style=""
      >
      <v-card-title
      class="display-4 font-weight-medium text-center white--text pa-4 text-wrap justify-center"
      style="overflow-wrap: break-word">
       {{optsArray[1].text}}
     </v-card-title>
      </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'verticalSplit',
  props: {
    optsArray: { type: Array }
  },
  data () {
    return {
      styleBackground: {
        'background-color': this.backgroundColor2
      }
    }
  },
  methods: {
    position: function (index) {
      console.log(index)
      if (index === 0) {
        return ' transparent justify-center top-set'
      }
      return 'transparent justify-center bottom-set'
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.half{
  height:50vh;
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
.top-set {
  margin-top: 0;
  position: relative;
}
.middle-set {
  position: relative;
 top: 50%;
 -ms-transform: translateY(-50%);
 transform: translateY(-50%);
}
.bottom-set {
  margin-top: 45%;
  position: relative;
}
</style>
