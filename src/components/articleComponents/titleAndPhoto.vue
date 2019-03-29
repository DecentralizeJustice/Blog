<template>
  <div style="width:100vw">
    <v-flex xs12 class="hidden-sm-and-down"  v-bind:style="style">
      <p style="position:relative;top: 10vh;width:61.8%;color: white;text-align:left;left:8%;"
         class="font-weight-black display-3" >
        {{title}}
      </p>
      <video
      muted loop autoplay
      data-aos="fade-up"
      :src="photo"
      style="top:12vh;position:relative;left:50vw;height:auto;width:40vw;"/>
    </v-flex>
    <v-flex xs12 class="hidden-md-and-up" v-bind:style="styleMobile">
       <v-flex   class="justify-center" style="margin: auto; width:90%;">
         <p  style="position:relative;top:10vh;color:white;text-align:center;" class="display-1">
           {{title}}
         </p>
       </v-flex>
       <video
       muted loop autoplay
       :src="photo"
        style="top:10vh;width:100vw;height:auto;left:0vw;position:relative;overflow:hidden;"/>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'titleandPhoto',
  props: ['title', 'photo', 'backgroundColor'],
  data () {
    return {
      style: {
        'position': 'relative',
        'height': '101vh',
        'background-color': this.backgroundColor
      },
      styleMobile: {
        'position': 'relative',
        'height': '90vh',
        'background-color': this.backgroundColor
      }
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
