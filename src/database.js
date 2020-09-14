const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Goy@goy@123!',
    database: 'company'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log('Ocurrio un error: ',err);
        return;
    } else {
        console.log('Se estableció una conexión exitosamente')
    }
});


module.exports = mysqlConnection;