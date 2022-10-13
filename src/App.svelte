<script lang="ts">
  var countDownDate = new Date("May 27, 2023 12:00:00").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("demo").innerHTML = days + "dagar " + hours + "timmar "
  + minutes + "minuter";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>

<main class="w-screen">
  <div class="w-full flex justify-center items-end relative mb-36 mt-16 flex-col items-center">
    <div class="pb-5 w-full bg-accent flex justify-end items-center flex-col">
      <div class="">
        <h1 class="text-4xl flex flex-col text-primary">Madeleine <span class="self-center">& Jonas<span></h1>
          <h4 class="text-2xl text-center text-secondary">27.5.2023</h4>
      </div>
    </div>
    <div id="demo"/>
  </div>
<div class="flex flex-col items-center gap-4">
  <p>Osa till bröllopet:</p>
  <a href="https://forms.gle/yDJdt3rPHDdmYmpq8" class="bg-secondary-secondary rounded-full p-4">Klicka här</a>
</div>

</main>
