import Database from 'better-sqlite3';
import path from 'path';


// Verbindung zur Datei 'test.db' herstellen
const dbPath = path.resolve(process.cwd(), 'test.db');
const db = new Database(dbPath, { verbose: console.log });

console.log(`Verbinde zur Datenbank unter: ${dbPath}`);

if(!db) {
    console.error('Fehler beim Verbinden mit der Datenbank');
}else {
    console.log('Erfolgreich mit der Datenbank verbunden');
}

try {
    db.exec(`
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            checked INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    console.log('Tabelle "items" erfolgreich initialisiert.');
} catch (error) {
    console.error('Fehler beim Erstellen der Tabelle:', error);
}