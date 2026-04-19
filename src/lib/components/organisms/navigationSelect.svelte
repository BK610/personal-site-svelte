<script lang="ts">
  function handleNavigation(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    window.location.href = value;
  }
</script>

<select onchange={handleNavigation} class="navigation-select">
  <option value={""}>Select a page</option>
  <option value={"/"}>Home</option>
  <option value={"/about"}>About</option>
  <option value={"/projects"}>Projects</option>
  <option value={"/books"}>Books</option>
  <option value={"/recipes"}>Recipes</option>
</select>

<style>
  select,
  ::picker(select) {
    appearance: base-select;
    background-color: #d7ded5;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    color: #000;
    cursor: pointer;
  }

  select option {
    background-color: #d7ded5;
    color: #000;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
  }
</style>
