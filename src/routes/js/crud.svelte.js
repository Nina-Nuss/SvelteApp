import { invalidateAll } from "$app/navigation";

// Funktionen exportieren — jede einzeln nutzbar
export const addItem = async (content, where) => {
    if (!content) return;
    await fetch("/api/" + where, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
    });
    await invalidateAll();
};

export const toggleChecked = async (id, where) => {
    await fetch("/api/" + where, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
    });
    await invalidateAll();
};

export const deleteItem = async (id, where) => {
    await fetch("/api/" + where, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
    });
    await invalidateAll();
};

