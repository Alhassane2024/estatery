
import db from "../config/database.js";

export const createProperty = (req, res)=>{
    try {
        const { name, price, location } = req.body;
    const imageUrl = req.file? `/uploads/${req.file.filename}` : "";

    const query = `INSERT INTO properties( name, price, location, image_url) VALUES(?, ?, ?, ?)`;
    db.run(query, [ name, price, location, imageUrl], function(err){
        if(err){
            res.status(500).json({ message: "ERREUR", error: err.message });
        }else{
            res.status(200).json({ id: this.lastID, name, price, location, imageUrl});
        }
    })
    } catch (error) {
        console.error("Erreur non gérée : ", error);
    }
};

export const getAllProperties = (req, res)=>{
    const query = `SELECT * FROM properties`;

    db.all(query, [], (err, rows)=>{
        if(err){
            res.status(500).json({ error: err.message });
        }else{
            res.status(200).json(rows);
        }
    })
};

export const updateProperty = (req, res)=>{
    const { id } = req.params;
    const { name, price, location} = req.body;
    const imageUrl = req.file? `uploads/${req.file.filename}` : null;

    let query, params;

    if(imageUrl){

        query = `UPDATE properties SET name = ?, price = ?, location = ?, image_url = ? WHERE id = ?`;
        params = [ name, price, location, imageUrl, id];
    }else{

        query = `UPDATE properties SET name = ?, price = ?, location = ? WHERE id = ?`;
        params = [ name, price, location, id];
    }

    
    db.run(query, params, function(err){
        if(err){
            res.status(500).json({ error: err.message });
        }else{
            res.json(
                { 
                    updatedID: id, 
                    changes: this.changes,
                    ssage: imageUrl ? "Propriété et image mises à jour" : "Propriété mise à jour",
            
                });
        }
    })
};

export const deleteProperty = (req, res)=>{
    const { id } = req.params;
    const query = `DELETE FROM properties WHERE id = ?`;

    db.run(query, [ id ], function(err){
        if(err){
            res.status(500).json({ error: err.message });
        }else{
            res.json({ deletedID: id });
        }
    })
}



export const filterProperties = (req, res)=>{
    const { name, location, price, minPrice, maxPrice } = req.query; // Récupération des paramètres
    // console.log(name);
    
    // Construire la requête SQL dynamiquement
    let query = `SELECT * FROM properties WHERE 1=1`;
    const params = [];

    if(name){
        query += ` AND name LIKE ?`;
        params.push( `%${name}%`); // Utiliser le LIKE pour une recherche partielle

    }

    if(location){
        query += ` AND location LIKE ?`;
        params.push(`%${location}%`);
    }

    if(minPrice){
        query += ` AND price <= ?`;
        params.push(minPrice);
    }


    db.all(query, params, (err, rows)=>{
        if(err){
            res.status(500).json({ error: "Erreur " + err.message })
        }else{
            res.status(200).json(rows);
        }
    })

    
    

}

