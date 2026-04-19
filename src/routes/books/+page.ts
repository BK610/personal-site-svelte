import type { PageLoad } from "./$types";
import type { Book } from "@/lib/types/books";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("/api/books");

  if (!res.ok) {
    let message = "Failed to load books";
    try {
      const body = (await res.json()) as { message?: string };
      if (typeof body?.message === "string") message = body.message;
    } catch {
      /* ignore */
    }
    return { books: [] as Book[], error: message };
  }

  const { books } = (await res.json()) as { books: Book[] };
  return { books, error: null as string | null };
};
