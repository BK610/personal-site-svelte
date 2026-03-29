<script lang="ts">
  import BookCard from "./BookCard.svelte";

  let { data } = $props();
</script>

<h1>Books</h1>
<div class="books-intro">
  <p>
    I love reading. Lots of fantasy, some scifi, occasionally non-fiction (I
    usually enjoy it, it's just not what I'm drawn to). I was a heavy reader as
    a kid, fell off during high school when reading was a requirement for class
    (common story), and then came back to it when I moved to Singapore just
    before the pandemic.
  </p>
  <p>
    I believe <em>owning things</em> also means{" "}
    <em>taking on the responsibility of taking care of them</em>. Between not
    wanting this responsibility and harboring deep feelings of anti-consumerism,
    I choose to primarily read ebooks instead of owning physical books.
  </p>
  <p>
    I check out books from one of the many libraries I have a card for (<a
      href={"/library-cards"}>check out my library card collection!</a
    >), using{" "}
    <a href="https://libbyapp.com/" target="_blank"> the Libby app </a>
    , and read them on my Kindle. I've searched for solid non-Amazon ereader alternatives,
    but none of them seem to have the right compatibility with Libby to allow me to
    use multiple library cards. If you don't suffer from this inane, self-inflicted
    constraint, I highly recommend{" "}
    <a href="https://us.kobobooks.com/collections/ereaders" target="_blank">
      Kobo ereaders
    </a>
    .
  </p>
</div>

{#if data.error}
  <p class="error">{data.error}</p>
{:else}
  <div class="books-container">
    {#each data.books as book, i}
      <BookCard {book} {i} />
    {/each}
  </div>
{/if}

<style>
  .books-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .books-container :global(.book) {
    flex: 1 1 140px;
  }
  .books-intro {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.9rem;
  }

  .error {
    color: #c00;
  }
</style>
