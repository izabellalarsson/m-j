<script>
  import Layout from "./Layout.svelte";
  import car from "../assets/car.svg";
  import map from "../assets/map-location.svg";
  import tram from "../assets/tram.svg";
  import { each } from "svelte/internal";

  export const data = [
    {
      icon: map,
      title: "Adress",
      description: "Lärjeåns kök & trädgårdar, Ekevadsvägen 5424 65 Angered",
      cta: "Karta",
      href: "https://goo.gl/maps/Y35xwNf18dcELsRd9",
    },
    {
      icon: tram,
      title: "Med spårvagn",
      description:
        "Med spårvagn 4, 8 eller 9 till Angered centrum, plus en kort promenad på ca 5 minuter.",
      cta: "Avgångar",
      href: "https://www.vasttrafik.se/reseplanering/reseplaneraren/",
    },
    {
      icon: car,
      title: "Med bil",
      description: "Det finns ett fåtal parkeringsplatser vid festlokalen.",
      cta: "Vägbeskriving",
      href: "https://goo.gl/maps/D7DGSikSB2uyfh3F8",
    },
  ];
</script>

<Layout>
  <section class="text-center">
    <h2 class="mb-14 md:mb-28">HITTA HIT</h2>

    <section
      class="grid grid-rows-3 md:grid-cols-3 w-full justify-items-center items-center md:items-end gap-10 text-center"
    >
      {#each data as item}
        <article class="flex flex-col items-center px-8 pt-2 md:px-40 gap-5">
          <img src={item.icon} class="w-20" />
          <p>{item.title}</p>
          <p class="text-lg">
            {item.description}
          </p>
          <a
            href={item.href}
            class="border-4 text-primary border-primary py-2 w-fit justify-self-center px-8 text-center text-2xl no-underline"
            >{item.cta}</a
          >
        </article>
      {/each}
    </section>
  </section>

  <!-- <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        title="Karta till Lärjeåns kök & trädgårdar"
        width="944"
        height="524"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=L%C3%A4rje%C3%A5ns%20k%C3%B6k%20&%20tr%C3%A4dg%C3%A5rdar&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      />
    </div>
  </div> -->
</Layout>
