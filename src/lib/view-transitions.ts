import { onNavigate } from "$app/navigation";

/**
 * Wraps SvelteKit navigations in the View Transition API when available.
 * Call once from the root layout during component initialization.
 *
 * Customize animations in `$lib/view-transitions.css` (or your own sheet)
 * using `::view-transition-old(root)` / `::view-transition-new(root)`.
 */
export function enablePageViewTransitions(): void {
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise<void>((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
}
