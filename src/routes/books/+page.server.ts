import type { PageServerLoad } from "./$types";
import type { Book } from "$lib/books";
import { loadBooks } from "$lib/server/books";

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const books = await loadBooks(fetch);
    return { books, error: null as string | null };
  } catch (e) {
    return {
      books: [] as Book[],
      error: e instanceof Error ? e.message : "Failed to load books",
    };
  }
};
