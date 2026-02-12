import { invalidateAll } from "$app/navigation";
class Crud {
    newItemName = $state("");
    addItem = async () => {
        if (!this.newItemName) return;
        await fetch("/api/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: this.newItemName }),
        });
        this.newItemName = "";
        await invalidateAll();
    }
    togglemyappChecked = async (id) => {
        await fetch("/api/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        await invalidateAll();
    }
    deleteItem = async (id) => {
        await fetch("/api/todo", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        await invalidateAll();
    }
}

export const crud = new Crud();