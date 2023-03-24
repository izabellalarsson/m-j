<script lang="ts">
  export let openMenu = false;
  export const links = [
    {
      name: "Hem",
      to: "landing",
    },
    {
      name: "Bröllopsdagen",
      to: "wedding_day",
    },
    {
      name: "Tal och spex",
      to: "speech",
    },
    {
      name: "Hitta hit",
      to: "location",
    },
    {
      name: "FAQ",
      to: "faq",
    },
    {
      name: "Bröllopspresent",
      to: "wedding-gift",
    },
    {
      name: "Övriga frågor",
      to: "questions",
    },
  ];

  const handleOnClick = () => {
    openMenu = !openMenu;
  };
</script>

<nav class="bg-accent fixed w-full">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button
          type="button"
          on:click={handleOnClick}
          class="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <!--
              Icon when menu is closed.
  
              Heroicon name: outline/bars-3
  
              Menu open: "hidden", Menu closed: "block"
            -->
          <svg
            class="{openMenu ? 'hidden' : 'block'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#3F5A45"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <!--
              Icon when menu is open.
  
              Heroicon name: outline/x-mark
  
              Menu open: "block", Menu closed: "hidden"
            -->
          <svg
            class="{openMenu ? 'block' : 'hidden'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#3F5A45"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end"
      >
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {#each links as link}
              <a
                href={`#${link.to}`}
                on:click={handleOnClick}
                class="text-primary font-black px-3 py-2 rounded-md text-sm"
                aria-current="page"><h3>{link.name}</h3></a
              >
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden {openMenu ? 'block' : 'hidden'}" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
      {#each links as link}
        <a
          href={`#${link.to}`}
          on:click={handleOnClick}
          class=" text-primary text-center block px-3 py-2 rounded-md text-base font-black"
          aria-current="page"><h3>{link.name}</h3></a
        >
      {/each}
    </div>
  </div>
</nav>
