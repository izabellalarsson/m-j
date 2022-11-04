<script lang="ts">
  export let state = "normal";
</script>

<section
  class={`p-6 sm:p-20 lg:p-40 w-full justify-center items-center ${
    state === "inverted" && "bg-primary"
  }`}
  id="speech"
>
  <slot />
</section>
