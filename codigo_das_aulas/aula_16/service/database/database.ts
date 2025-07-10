import * as SQLite from "expo-sqlite"
import { Contact } from "../../types/contact"

export const initDatabase = async () => {
  const db = await SQLite.openDatabaseAsync("contacts.db")
  await db.execAsync("PRAGMA journal_mode = WAL;")

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      birth_date TEXT NOT NULL,
      photo_uri TEXT,
      phone_number TEXT NOT NULL UNIQUE
    );
  `)

  return db
}

export const insertContact = async (
  db: SQLite.SQLiteDatabase,
  contact: {
    name: string
    birth_date: string
    photo_uri: string
    phone_number: string
  }
) => {
  const { name, birth_date, photo_uri, phone_number } = contact

  await db.runAsync(
    `INSERT INTO contacts (name, birth_date, photo_uri, phone_number)
     VALUES (?, ?, ?, ?)`,
    [name, birth_date, photo_uri, phone_number]
  )
}

export const fetchAllContacts = async (
  db: SQLite.SQLiteDatabase
): Promise<Contact[]> => {
  const rows = await db.getAllAsync("SELECT * FROM contacts ORDER BY name ASC")
  return rows as Contact[]
}

export const firstContact = async (
  db: SQLite.SQLiteDatabase,
  id: number
): Promise<Contact | null> => {
  const row = await db.getFirstAsync("SELECT * FROM contacts WHERE id = ?", [
    id,
  ])
  return row as Contact | null
}

export const updateContact = async (
  db: SQLite.SQLiteDatabase,
  contact: {
    id: number
    name: string
    birth_date: string
    photo_uri: string
    phone_number: string
  }
) => {
  const { name, birth_date, photo_uri, phone_number, id } = contact
  await db.runAsync(
    `UPDATE contacts SET name = ?, birth_date = ?, photo_uri = ?, phone_number = ? WHERE id = ?`,
    [name, birth_date, photo_uri, phone_number, id]
  )
}
