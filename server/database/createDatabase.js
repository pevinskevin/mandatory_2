import 'dotenv/config';
import db from './connection.js';

// two tables

// DDL

// db.all for SELECT statements, we want to get something back.
// db.run for INSERT, UPDATE, DELETE, nothing is returned.
// db.exec for schematics without parameters, can contain multiple commands.

const deleteMode = process.argv.includes('--delete');

if (deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS users`);
    console.log('Database succesfully reset');
}

db.exec(
    `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT CHECK(length(username)<=50) UNIQUE,
    password TEXT,
    role TEXT
    );`
);
console.log('DB created.');

// DML
// seeding

if (deleteMode) {
    if (!process.env.ADMIN_PASSWORD) {
        console.log(
            'Error: ADMIN_PASSWORD environment variable is not set',
            process.env.ADMIN_PASSWORD
        );
        process.exit(1);
    }
    await db.run(`INSERT INTO users (username, password, role)
    VALUES ("admin", "${process.env.ADMIN_PASSWORD}", "admin");
`);
    console.log('Database seeded with hashed admin password');
}
