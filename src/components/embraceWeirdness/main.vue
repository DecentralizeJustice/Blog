<template>
  <div>
  <section class="intro" style="position: relative;">

    <v-layout align-start row wrap >
           <v-flex class="title" xs5 offset-xs1 pa-4>
           <div class="display-4 white--text font-weight-medium" >
             Embrace Weirdness
           </div>
           <br>
           <div class="white--text display-1 font-weight-light">
             Cryptocurrency feels weird. It should.
           </div>
         </v-flex>
    </v-layout>
  </section>

  <section style="background-color: rgb(29, 66, 76);height: 75vh;position: relative;">
    <p style="position:relative;top: 8vh;width:61.8%;color: white;text-align:left;left:8%;"
       class="font-weight-black display-3" >
      Would you take a ride from a driver who learned how to drive from studying and riding bicycles?
    </p>
    <img
    src="https://media.giphy.com/media/3oEhn98ueBrGZQJTJ6/giphy.gif"
    alt="Scary Driver" style="top:10vh;position:relative;left:52%;height:auto;width:40vw;">
  </section>

  <section style="background-color: #315557;height: 100vh;position: relative;">

    <p style="width:61.2vw;">
    <span class="firstcharacter">No!</span>
    orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique lobortis orci ac lacinia. Fusce eu purus
    eget diam vehicula auctor nec eu elit. Morbi consequat facilisis orci vel malesuada. Donec ultrices molestie
    sollicitudin. Aliquam pharetra libero enim. Donec et suscipit massa. Donec dui odio, dignissim non sodales et,
    tincidunt a sapien. Phasellus elit nibh, adipiscing sed blandit vel, interdum et arcu.
    </p>
  </section>
</div>
</template>

<script>
export default {
  name: 'embraceWeirdness'
}
</script>
<!-- styling for the component -->
<style scoped>
.firstcharacter {

  float: left;
  font-family: Georgia;
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}
.title{
  position: absolute;
  top: 15vh;
  background-color: rgb(29, 66, 76,.9);
  border-radius: 3%;
}
.intro {
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://images.pexels.com/photos/1600757/pexels-photo-1600757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
}
.container {
  position: absolute;
  top: 85vh;
  left:48%;
}
.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}
.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}
.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}
.chevron:before,
.chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: #fff;
}
.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}
.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}
@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}
@keyframes pulse {
  to {
    opacity: 1;
  }
}
</style>
