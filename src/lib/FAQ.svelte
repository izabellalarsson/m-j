<script>
  import Layout from "./Layout.svelte";
  import src from "../assets/ACS_0759.jpg";

  export const data = [
    {
      question: "När?",
      answer: "27 maj",
    },
    {
      question: "Var?",
      answer: "Lärjeåns Trädgårdar i Angered, Göteborg",
    },
    {
      question: "Tid?",
      answer: "Bröllopet startar kl 15",
    },
    {
      question: "Barn?",
      answer: "Lämna dem hemma 😊",
    },
    {
      question: "Klädsel?",
      answer: "Kavaj",
    },
    {
      question: "Hashtag?",
      answer: "#DUFVA2023",
    },
    {
      question: "OSA?",
      answer: "Senast 1 april",
    },
  ];
</script>

<Layout>
  <section class="grid grid-rows-2 md:grid-cols-2 items-center">
    <div>
      <h2 class="mb-4">FAQ</h2>
      {#each data as { question, answer }, i}
        <article
          class="bg-primary text-accent rounded p-3 w-fit my-2 flex items-center gap-3"
        >
          <h4 class="text-xl">{question}</h4>
          <p class="text-xl text-secondary">{answer}</p>
        </article>
      {/each}
    </div>

    <img
      {src}
      class="w-8/12 mt-10 md:mt-0 m-auto md:ml-auto shadow-squareBox"
    />
  </section>
</Layout>
