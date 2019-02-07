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

  </section>
  <div>

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
  top: 20vh;
  background-color: rgb(29, 66, 76,.9);
}
.intro {
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://images.pexels.com/photos/1600757/pexels-photo-1600757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
}

</style>
