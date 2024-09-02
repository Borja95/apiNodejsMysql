const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin123',
    database: 'tutoriales',
    port: 3306
});

db.connect((err)=>{
    if(err){
        throw err;
    }

    console.log("Conexión a MySQL Exitosa");
});

module.exports = db;