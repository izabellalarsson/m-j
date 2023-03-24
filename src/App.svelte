<script lang="ts">
  import Faq from "./lib/FAQ.svelte";
  import Landing from "./lib/Landing.svelte";
  import Questions from "./lib/Questions.svelte";
  import Speech from "./lib/Speech.svelte";
  import Weddingday from "./lib/Weddingday.svelte";
  import Location from "./lib/Location.svelte";
  import Navigation from "./lib/Navigation.svelte";
  //   var countDownDate = new Date("May 27, 2023 12:00:00").getTime();
  //   var x = setInterval(function() {
  //   var now = new Date().getTime();
  //   var distance = countDownDate - now;

  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  //   document.getElementById("demo").innerHTML = days + "dagar " + hours + "timmar "
  //   + minutes + "minuter";

  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
  // }, 1000);
</script>

<main class="w-screen bg-secondary">
  <Navigation />
  <Landing />
  <Weddingday />
  <Speech />
  <Location />
  <Faq />
  <Questions />
</main>
