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
             Cryptocurrency is weird. It should be.
           </div>

         </v-flex>

    </v-layout>

  </section>

  <section style="background-color: rgb(29, 66, 76);height: 75vh;position: relative;">

    <p style="position:relative;top: 8vh;width:61.8%;color: white;text-align: left;left:8%;"
       class="font-weight-black display-3" >
      Would you take a ride from a driver who learned how to drive from studying and riding bicycles?
    </p>

    <img
    src="https://media.giphy.com/media/3oEhn98ueBrGZQJTJ6/giphy.gif"
    alt="Scary Driver" style="top:10vh;position:relative;left:30vw;height:auto;width:40vw;">

  <!-- <p style="position: relative;top: 0vh; border-style: solid;
   border-width: medium;width:62.5%;" class="font-weight-regular title" >
    Would you leave the driver 5 stars or hop out at the next stop light?
    Hopefully you would hop out because your driver made a connection based on similarities that don’t really matter.
     In this example it is clear and comical that this person does not understand how to drive well.
     Cars and bikes share some similarities, but cars were an innovative technology compared to bikes,
      so drawing similarities between the two technologies isn’t really useful, and can be dangerous.
  </p> -->

  </section>
  <section style="background-color: #103436;height: 100vh;position: relative;">

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
