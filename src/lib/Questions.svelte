<script>
  import Layout from "./Layout.svelte";
</script>

<Layout state="inverted" id="questions">
  <section
    class="grid grid-rows-2 h-full place-items-center selection:bg-secondary selection:text-primary"
  >
    <h2 class="text-accent">Övriga frågor</h2>
    <p class="text-white text-center">
      Är det något ni undrar över är ni givetvis välkomna att prata med
      brudparet i fråga.
      <span
        >Annars kan ni alltid vända er till våra toastmasters Viktor&Alina.</span
      >
      <span
        >Ni når dem enkelt på mail, <a href="mailto:madeleineochjonas@gmail.com"
          >madeleineochjonas@gmail.com</a
        ></span
      >
    </p>
  </section>
  <section class="mt-40">
    <h3 class="text-accent">
      Psst.. missade du OSA-knappen? <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScsUx1mpPeYf7NSfDcxdFwG_deFxup3EWyZCVw9vmQ_TXw6Og/viewform?usp=sf_link"
        >Klicka här för att komma till formuläret</a
      >
    </h3>
  </section>
</Layout>
