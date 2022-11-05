<script>
  import Layout from "./Layout.svelte";
  import src from "../assets/wedding-img.webp";
</script>

<Layout id="wedding_day">
  <section class="md:grid grid-rows-2 md:grid-cols-2 md:grid-rows-none">
    <article class="flex flex-col-reverse md:flex-col gap-8 ">
      <h2>BRÖLLOPSDAGEN</h2>
      <img
        {src}
        alt="Madeleine och Jonas sitter och håller om varandra"
        class="w-3/4 md:w-2/3 shadow-squareBox self-center md:self-auto"
      />
    </article>
    <article class="self-center">
      <p>Vigseln startar klockan 15 och hålls utomhus om vädret tillåter.</p>
      <p>
        Efterföljande middag och fest hålls också i Lärjeåns trädgårdars
        lokaler.
      </p>
    </article>
  </section>
</Layout>
