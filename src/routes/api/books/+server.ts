import { json, error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { loadBooks } from "$lib/server/books";

/** JSON list for client-side `load`; Cache-Control lets the browser reuse the response. */
export const GET: RequestHandler = async ({ fetch, setHeaders }) => {
  try {
    const books = await loadBooks(fetch);
    setHeaders({
      "cache-control":
        "public, max-age=300, s-maxage=600, stale-while-revalidate=86400",
    });
    return json({ books });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to load books";
    throw error(502, message);
  }
};
