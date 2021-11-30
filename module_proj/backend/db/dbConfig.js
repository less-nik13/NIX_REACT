import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'db.json');

const adapter = new JSONFile(filePath);
const db = new Low(adapter);

await db.read();
db.data = db.data || { todos: [], colors: [], users: [] };

export default db