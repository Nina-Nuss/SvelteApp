import { json } from '@sveltejs/kit';
import * as db from '$lib/database/database.js';

export async function POST({ request }) {
    const data = await request.json();
    // Wenn eine ID gesendet wird -> Toggle
    if (data.id) {
        db.toggleItem(data.id);
        return json({ success: true });
    }
    // Sonst -> Neues Item erstellen
    if (data.name) {
        db.addItem(data.name);
        return json({ success: true }, { status: 201 });
    }
    return json({ error: 'Missing name or id' }, { status: 400 });
}

export async function PATCH({ request }) {
    const { id } = await request.json();
    db.toggleItem(id);
    return json({ success: true });
}

export async function DELETE({ request }) {
    const { id } = await request.json();
    db.deleteItem(id);
    return json({ success: true });
}

export async function PUT({ request }) {
    const { name } = await request.json();
    db.addItem(name);
    return json({ success: true });
}



