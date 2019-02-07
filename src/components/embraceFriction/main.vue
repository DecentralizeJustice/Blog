<template>
  <div>
  <section class="intro">

    <v-layout align-start row wrap >
           <v-flex class="title" xs5 offset-xs1 pa-4>
           <div class="display-4 white--text font-weight-medium" >
             Embrace Friction
           </div>
           <br>
           <div class="white--text display-1 font-weight-light">
             Cryptocurrency is hard. Embrace it responsibly.
           </div>

         </v-flex>

    </v-layout>
    <div class="container">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>
  </section>

  <div style="background-color: rgb(29, 66, 76);height: 100vh;">

  </div>
</div>
</template>

<script>
export default {
  name: 'embraceFriction'
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
