import { z } from "zod";

/** Schema for a single book from the books API */
export const bookSchema = z.object({
  title: z.string(),
  isbn: z.string(),
  dateRead: z.string(),
  author: z.string(),
});

/** Schema for the books API response */
export const booksApiResponseSchema = z.object({
  books: z.array(bookSchema),
});

/** Type inferred from the book schema — use throughout the app */
export type Book = z.infer<typeof bookSchema>;
