<script lang="ts">
  export let state = "normal";
  export let id;
</script>

<section
  class={`p-6 sm:p-20 lg:p-40 w-full justify-center items-center selection:bg-primary selection:text-secondary ${
    state === "inverted" && "bg-primary"
  }`}
  {id}
>
  <slot />
</section>
