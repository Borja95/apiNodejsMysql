const db = require('../config/dbConfig');

class Personaje{


    getPersonajes(callback){
        const sql = "select id, nombreCompleto, edad, altura, peso from personajesRurouni";
        db.query(sql, callback);
    }

    getPersonajeById(id, callback){
        const sql = "select id, nombreCompleto, edad, altura, peso from personajesRurouni where id = ?";
        db.query(sql, [id], callback);
    }

    postPersonaje(nombreCompleto, edad, altura, peso, callback){
        const sql = 'insert into personajesRurouni(nombreCompleto, edad, altura, peso) values (?, ?, ?, ?)';
        db.query(sql, [nombreCompleto, edad, altura, peso], (err, result)=>{
            if(err){
                return callback(err, null);
            }

            callback(null, result.insertId);
        });
    }


    putPersonaje(id, nombreCompleto, edad, altura, peso, callback){
        const sql = 'update personajesRurouni set nombreCompleto = ?, edad = ?, altura = ?, peso = ? where id = ?';
        db.query(sql, [nombreCompleto, edad, altura, peso, id], callback);
    }

    deletePersonaje(id, callback){
        const sql = 'delete from personajesRurouni where id = ?';
        db.query(sql, [id], callback);
    }





}

module.exports = new Personaje()