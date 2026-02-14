<script>
    import "../app.css";
    import { addItem, deleteItem, toggleChecked } from "./js/crud.svelte.js";

    let { data } = $props();
    let einkaufsliste = $derived(data.einkaufsliste);
    let newItemName = $state("");
    let selected = $state("b");

    const handleAdd = async () => {
        await addItem(newItemName, "todo");
        newItemName = "";
    };
</script>

<div style="margin-top: 20px;">
    <div class="flex gap-2">
        <input
            type="text"
            bind:value={newItemName}
            placeholder="Neues Item..."
        />
        <button class="btn bg-green-500" onclick={handleAdd}>Hinzufügen</button>
    </div>
</div>
<h3>Meine Liste (aus SQLite):</h3>
<ul>
    {#each einkaufsliste as item (item.id)}
        <div class="flex flex-row items-center my-2">
            <input type="hidden" name="id" value={item.id} />
            <input
                type="checkbox"
                checked={item.checked}
                onchange={() => toggleChecked(item.id, "todo")}
                class="mr-2"
            />
            <li class="mx-2 {item.checked ? 'line-through text-gray-500' : ''}">
                {item.name}
            </li>
            <button
                class="btn bg-red-500 mx-2"
                onclick={() => deleteItem(item.id, "todo")}>Del</button
            >
        </div>
    {/each}
</ul>

<!-- ...existing code... -->
<select bind:value={selected}>
    <option value={"a"}>a</option>
    <option value={"b"} selected>b</option>
    <option value={"c"}>c</option>
</select>

<style>
    /* ...existing code... */
    .btn {
        padding: 10px;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    input[type="text"] {
        padding: 10px;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    li {
        font-size: 1.2rem;
        margin: 5px;
        display: flex;
        align-items: center;
    }
</style>
