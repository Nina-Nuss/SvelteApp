<script>
  let aufgaben = [
    { id: 1, text: 'MS Planner UI analysieren', erledigt: false },
    { id: 2, text: 'Open Source Alternative suchen', erledigt: true },
    { id: 3, text: 'Svelte Prototyp bauen', erledigt: false }
  ];
</script>

<ul>
  {#each aufgaben as aufgabe}
    <li class:done={aufgabe.erledigt}>
      <input 
        type="checkbox" 
        bind:checked={aufgabe.erledigt} 
      />
      {aufgabe.text}
    </li>
  {/each}
</ul>

<style>
  .done { color: gray; text-decoration: line-through; }
</style>