import sqlite3 from "sqlite3";

const db = new sqlite3.Database("../database.db", (err)=>{
    if(err){
        console.error("Erreur lors de la connexion à la base de données :", err.message);
    }else{
        console.log("Connexion à la base de données SQLite réussie !");
    }
});

db.serialize(()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS properties (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            location TEXT NOT NULL,
            image_url TEXT
        )
        `, (err)=>{
            if(err){
                console.error("Erreur lors de la création de la table :", err.message);
            }else{
                console.log("Table 'properties' prête !");
            }
        }
    )
});

export default db;

// db.run("ALTER TABLE properties ADD COLUMN image_url TEXT", (err) => {
//     if (err) {
//         console.log("Le champ image_url existe déjà ou une erreur s'est produite.");
//     } else {
//         console.log("Champ image_url ajouté à la table properties.");
//     }
// });