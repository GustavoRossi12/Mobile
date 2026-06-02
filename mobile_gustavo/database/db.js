import * as SQLite from 'expo-sqlite';

const database_name = "exemplo_sqlite";

const SQL_CREATE = `CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY NOT NULL, 
    name VARCHAR(255) NOT NULL, 
    valor REAL NOT NULL 
);`;

let db = null;

export default async function openDB() {
    if (!db) {
        // 1. Abre o banco de forma assíncrona
        db = await SQLite.openDatabaseAsync(database_name);

        // 2. Executa a criação da tabela de forma assíncrona
        // Usamos execAsync para comandos sem retorno (como CREATE TABLE)
        await db.execAsync(SQL_CREATE);
    }
    return db;
}