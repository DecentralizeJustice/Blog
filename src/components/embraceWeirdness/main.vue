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
    <img
    src="https://www.noosaboathouse.com.au/wp-content/uploads/2015/11/scroll-down-icon.png"
    alt="Scary Driver"
    class="bounce" style="width:9vh;height:auto;left:49vw;height:auto;">
  </section>

  <section style="background-color: rgb(29, 66, 76);height: 75vh;position: relative;">
    <p style="position:relative;top: 8vh;width:61.8%;color: white;text-align:left;left:8%;"
       class="font-weight-black display-3" >
      Would you take a ride from a driver who learned how to drive from studying and riding bicycles?
    </p>
    <img
    data-aos="fade-up"
    src="https://media.giphy.com/media/3oEhn98ueBrGZQJTJ6/giphy.gif"
    alt="Scary Driver" style="top:10vh;position:relative;left:52%;height:auto;width:40vw;">
  </section>

  <section style="background-color: #486E70;height: 89vh;position: relative;padding-top:5vh;">

    <div style="width:50vw;margin-left:5vw;font-size:20px;line-height: 27px;background-color:white;
    border-style:solid;border-color: rgb(29, 66, 76);border-width: 1vh;padding:2vw" class="subheading">
    <p><span class="firstcharacter">No!</span>
    would have hopefully been your answer. You would say no because your driver
    made a connection based on similarities that don’t really matter. In this example it is clear and comical that this person does
    not understand how to drive well. Cars and bikes share some similarities, but cars were an innovative technology compared to bikes,
    so drawing similarities between the two technologies isn’t really useful, and can be dangerous.</p>

    <p>When I first started learning about cryptocurrencies I wanted to understand everything about them. I wanted to know what types they were,
     how they worked, how I could get involved, and most importantly, what they would look like in the future. In order to learn about the
     future of  cryptocurrencies, I decided to look to the past for guidance and since the internet and cryptocurrencies seemed similar I decided
      to study the history of the internet in order to learn more about how cryptocurrencies might grow and evolve in the future. At the time
      this made perfect sense to me, since were taught that history is a great tool for learning about the future. This didn’t really help me
      learn anything about cryptocurrencies(although it is a great thing to know about). That was years ago, and I know why my plan to predict the
      future of crypto didn't work; Drawing similarities between innovative technologies doesn't  work because of the nature of innovation.</p>

     Hubris combined with focusing on how two technologies are similar can cost you to get into an accident, such as the case with a car vs
      a bicycle  or to miss out on some beautiful and life changing opportunities because technology is weird and unpredictable.

    </div>
    <img     data-aos="fade-left"
    src="https://images.pexels.com/photos/1467564/pexels-photo-1467564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    alt="Studying"
    style="top:5vh;position:absolute;right:8vw;height:auto;width:28vw;"
    >
    <img     data-aos="fade-left"
    src="https://images.pexels.com/photos/545062/pexels-photo-545062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    alt="Studying 2"
    style="top:45vh;position:absolute;right:8vw;height:auto;width:28vw;"
    >
  </section>

  <section style="background-color: rgb(29, 66, 76);height: 95vh;position: relative;">
    <p style="position:relative;top: 8vh;width:85vw;color: white;text-align:left;left:8%;"
       class="font-weight-black display-2" >
      If what I say now seems to be very reasonable, then I will have failed completely.
       Only if what I tell appears absolutely unreasonable have we any chance of visualizing
       the future as it really will happen. <br>  - Arthur C. Clarke
    </p>
    <img
    src="https://i.gifer.com/D2qg.gif"
    alt="2001: A Space Odyssey" style="top:5vh;position:relative;left:40vw;
    height:auto;width:50vw;  border-style: solid;border-color: #486E70;border-width: 1vh;">
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
  position: relative;
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
