<script>
    import { invalidateAll } from "$app/navigation";
    import { json } from "@sveltejs/kit";
    let../../test2/$types.js { data } = $props();
    let einkaufsliste = $derived(data.einkaufsliste);
    let selected = $state("b");
    let newItemName = $state("");

    async function toggleChecked(id) {
        console.log(id);
            await fetch("/api/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        await invalidateAll();
    }
    async function addItem() {
        if (!newItemName) return;
        await fetch("/api/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: newItemName }),
        });
        newItemName = "";
        await invalidateAll();
    }
    async function deleteItem(id) {
        await fetch("/api/todo", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        await invalidateAll();
    }
</script>
<div style="margin-top: 20px;">
    <div class="flex gap-2">
        <input
            type="text"
            bind:value={newItemName}
            placeholder="Neues Item..."
        />
        <button class="btn bg-green-500" onclick={addItem}>Hinzufügen</button>
    </div>
</div>

<h3>Meine Liste (aus SQLite):</h3>
<ul>
    {#each einkaufsliste as item (item.id)}
        <div class="flex flex-row items-center my-2">
            <!-- Checkbox als Formular -->
            <input type="hidden" name="id" value={item.id} />
            <!-- onchange sendet das Formular sofort ab -->
            <input
                type="checkbox"
                checked={item.checked}
                onchange={() => 
                (item.id)}
                class="mr-2"
            />
            <li class="mx-2 {item.checked ? 'line-through text-gray-500' : ''}">
                {item.name}
            </li>
            <!-- Löschen Button ohne Formular -->
            <button
                class="btn bg-red-500 mx-2"
                onclick={() => deleteItem(item.id)}>Del</button
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
