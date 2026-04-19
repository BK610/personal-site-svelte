<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Navigation from "@/lib/components/organisms/navigation.svelte";

  // Set up view transitions
  import "$lib/view-transitions.css";
  import { enablePageViewTransitions } from "$lib/view-transitions";
  enablePageViewTransitions();

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="page-frame">
  <header>
    <Navigation />
  </header>
  <main>
    {@render children()}
  </main>
  <footer><span>Made by Bailey</span></footer>
</div>

<style>
  header {
    height: 3rem;
    padding: 1rem;
  }

  .page-frame {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  .page-frame > header,
  .page-frame > footer {
    flex-shrink: 0;
  }

  .page-frame > main {
    flex: 1 1 auto;
  }

  footer {
    background-image: url("$lib/assets/Footer.svg");
    background-position: bottom;
    background-repeat: repeat-x;
    height: 110px;
    border-top: 1px solid #a39c96;
    text-align: center;
    padding-top: 0.3rem;
    margin-top: 1rem;
  }

  footer span {
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 600;
  }

  :global {
    /**
    Font imports
    */
    @import url("https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    * {
      font-family: "Poppins", sans-serif;
    }
    /*
      Josh's Custom CSS Reset
      https://www.joshwcomeau.com/css/custom-css-reset/
    */

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    *:not(dialog) {
      margin: 0;
    }

    @media (prefers-reduced-motion: no-preference) {
      html {
        interpolate-size: allow-keywords;
      }
    }

    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      background-color: #eddfd3;
      color: #302f2f;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    p {
      text-wrap: pretty;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-wrap: balance;
    }
    h1,
    h2,
    h3 {
      font-family: "Aleo", serif;
    }

    #root,
    #__next {
      isolation: isolate;
    }
  }
</style>
