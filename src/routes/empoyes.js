const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');


// OBTENER A TODOS LOS EMPLEADOS
router.get('/',(req,res) => {
    mysqlConnection.query('SELECT * FROM employees', (err,rows,fields) => {
        if (!err){
            res.json(rows);
        } else {
            console.log('Hubo un error al traer los datos: ',err);
        }
    });
});

// OBTENER EMPLEADO POR ID
router.get('/:id', (req,res) => {
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err,rows,fields) => {
        if (!err){
            res.json(rows[0]);
        } else {
            console.log('Hubo un error al traer los datos: ',err);
        }
    });
});

// AGREGAR EMPLEADO
router.post('/', (req,res) =>{
    const { id,name,salary } = req.body;
    const query = ` SET @id = ?;
                    SET @name = ?;
                    SET @salary = ?;
                    CALL employeeAddOrEdit(@id,@name,@salary); `;
    mysqlConnection.query(query, [id,name,salary], (err,rows,fields) =>{
        if(!err){
            console.log('Empleado creado');
        }
    });
});


module.exports = router;