import { BOOKS_DATA_URL } from "$env/static/private";
import { booksApiResponseSchema, type Book } from "$lib/books";
import { csvToJson } from "$lib/csv";

/**
 * Fetches, sorts, and validates books from the configured CSV source.
 * Pass SvelteKit's `fetch` from a load function or handler for correct caching / bindings.
 */
export async function loadBooks(fetchFn: typeof fetch): Promise<Book[]> {
  const response = await fetchFn(BOOKS_DATA_URL);
  const csvText = await response.text();
  const data = csvToJson<Record<string, string>>(csvText);
  const books = data
    .sort(
      (a, b) => new Date(b.dateRead).getTime() - new Date(a.dateRead).getTime(),
    )
    .slice(0, 15);
  return booksApiResponseSchema.parse({ books }).books;
}
