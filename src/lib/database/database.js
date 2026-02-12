import Database from 'better-sqlite3';

// Verbindung zur Datei 'test.db' herstellen
const db = new Database('test.db');
// Tabelle initialisieren
// ID wird automatisch hochgezählt (AUTOINCREMENT)
// created_at wird automatisch auf die aktuelle Zeit gesetzt
db.exec(`
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        checked INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

export function getItems() {
    // Sortieren: Neueste Einträge zuerst (ORDER BY id DESC ist auch möglich)
    const stmt = db.prepare('SELECT * FROM items ORDER BY created_at DESC');
    return stmt.all().map(item => ({
        ...item,
        checked: Boolean(item.checked)
    }));
}

export function addItem(name) {
    // Wir übergeben nur 'name'. 
    // 'id' und 'created_at' werden von der Datenbank automatisch generiert.
    const stmt = db.prepare('INSERT INTO items (name) VALUES (?)');
    stmt.run(name);
}

export function deleteItem(id) {
    const stmt = db.prepare('DELETE FROM items WHERE id = ?');
    stmt.run(id);
}

export function toggleItem(id) {
    const stmt = db.prepare('UPDATE items SET checked = NOT checked WHERE id = ?');
    stmt.run(id);
}

export function updateItem(id, name) {
    const stmt = db.prepare('UPDATE items SET name = ? WHERE id = ?');
    stmt.run(name, id);
}
