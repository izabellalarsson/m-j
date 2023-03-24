<script lang="ts">
  import Faq from "./lib/FAQ.svelte";
  import Landing from "./lib/Landing.svelte";
  import Questions from "./lib/Questions.svelte";
  import Speech from "./lib/Speech.svelte";
  import Weddingday from "./lib/Weddingday.svelte";
  import Location from "./lib/Location.svelte";
  import Navigation from "./lib/Navigation.svelte";
  import Gifts from "./lib/Gifts.svelte";
</script>

<main class="w-screen bg-secondary">
  <Navigation />
  <Landing />
  <Weddingday />
  <Speech />
  <Location />
  <Faq />
  <Gifts />
  <Questions />
</main>
