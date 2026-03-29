<script lang="ts">
  import type { Book } from "$lib/books";

  let { book, i }: { book: Book; i: number } = $props();
  const formattedReadDate = $derived(
    new Date(book.dateRead).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    }),
  );
</script>

<div class="book" style="--i: {i}">
  <a target="_blank" href={`https://openlibrary.org/isbn/${book.isbn}`}>
    <div>
      <img
        src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`}
        alt={book.title}
      />
      <div class="book-info">
        <h3 class="book-title">{book.title}</h3>
        <p class="book-author">By {book.author}</p>
        <p class="book-date-read">Read {formattedReadDate}</p>
      </div>
    </div>
  </a>
</div>

<style>
  .book {
    display: flex;
    flex-direction: column;
    min-width: 180px;
    max-width: 220px;
    overflow: hidden;
    opacity: 0;
    animation: fadeIn 0.2s ease-out forwards;
    animation-delay: calc(var(--i, 0) * 0.3s);
  }

  .book:hover,
  .book:focus {
    transform: scale(1.05);
    transition: transform 0.2s ease;
    z-index: 9999;
  }

  .book img {
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    flex-shrink: 0;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    gap: 0;
    background-color: #f0f0f0;
  }

  .book-title {
    padding: 0 0.5rem;
    margin: 0;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .book-author {
    padding: 0 0.5rem;
    margin: 0;
    font-size: 0.8rem;
  }

  .book-date-read {
    padding: 0 0.5rem;
    margin: 0;
    font-size: 0.7rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
