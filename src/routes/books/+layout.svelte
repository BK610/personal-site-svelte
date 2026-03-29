<script lang="ts">
  let { children } = $props();
</script>

<div class="books-layout">
  {@render children()}
</div>

<style>
  .books-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    padding: 0 1rem;
  }
</style>
