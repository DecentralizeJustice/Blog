<template>
  <div style="width:100vw">
  <v-flex class="hidden-sm-and-down intro" xs12 :style="style">
           <v-flex class="title" xs5 offset-xs1 pa-4 :style="styleBackColor" >
           <div class="display-4 white--text font-weight-medium text-xs-center" >
             {{title}}
           </div>
           <br>
           <div class="white--text display-1 font-weight-light">
             {{subHeading}}
           </div>
         </v-flex>
    <img
    src="https://res.cloudinary.com/dylevfpbl/image/upload/v1554347922/decenblog/scroll-down-icon.png"
    alt="Scroll Down"
    class="bounce" style="width:9vh;height:auto;left:49vw;height:auto;">
  </v-flex>
  <v-flex class="intro hidden-md-and-up xs12" :style="styleMobile">
           <v-flex class="title" xs10 offset-xs1 pa-4 :style="styleBackColor">
           <div class="display-3 white--text font-weight-medium" >
             {{title}}
           </div>
           <br>
           <div class="white--text display-1 font-weight-light">
             {{subHeading}}
           </div>
         </v-flex>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'landingPage',
  props: ['title', 'subHeading', 'background', 'color'],
  data () {
    return {
      styleBackColor: {
        'background-color': this.color
      }
    }
  },
  computed: {
    style () {
      return 'position:relative;height:80vh; background-image: url(' + this.background + ' )'
    },
    styleMobile () {
      return 'position:relative;height:100vh;overflow:hidden; background-image: url(' + this.background + ' )'
    }
  }
}
</script>

<style scoped>

.title{
  position: relative;
  top: 15vh;
  border-radius: 3%;
}
.intro {
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bounce {
   position:absolute;
   left:50%;
   bottom:0;
   margin-top:-25px;
   margin-left:-25px;
   height:50px;
   width:50px;
   -webkit-animation:bounce 1s infinite;
   -moz-animation:bounce 1s infinite;
   -o-animation:bounce 1s infinite;
   animation:bounce 1s infinite;

 }

 @-webkit-keyframes bounce {
   0%       { bottom:0px; }
   50%      { bottom:15px; }
   100%     {bottom:30;}
 }

  @-moz-keyframes bounce {
   0%       { bottom:0px; }
   50%      { bottom:15px; }
   100%     {bottom:30;}
 }

  @-o-keyframes bounce {
   0%       { bottom:0px; }
   50%      { bottom:15px; }
   100%     {bottom:30;}
 }

  @keyframes bounce {
   0%       { bottom:0px; }
   50%      { bottom:15px; }
   100%     {bottom:30;}
 }

</style>
