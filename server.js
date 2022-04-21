const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true})); 

app.use(express.json()); 

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db',
  port: 3306
})

connection.connect()





app.get(("/"), (req, res) =>{
  res.send('Tout les employés sont sélectionnés')
})

app.get(("/employee"), (req, res) =>{
  connection.query( "SELECT * FROM EMPLOYEE", (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
    
  })
  res.send(rows[0].solution);
})

app.put(("/employee-update/:maj"), (req, res =>{
  var maj =req.params.id;
  connection.query( "UPDATE EMPLOYEE SET dept = Accounting WHERE empId = " + maj, (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  })
  res.send('La liste des employés à été mise à jour');
})

app.delete(("/employee-delete/:id"), (req, res =>{
  var id = req.params.id
  "DELETE FROM EMPLOYEE WHERE empId = " + id
  res.send('Employé' + rows + 'supprimé')
})

app.post(("/employee-insert/:id/:Name/:Dept"), (req, res =>{
  var num =req.params.id;
  var nom =req.params.Name;
  var departm =req.params.Dept;
  connection.query( "INSERT INTO EMPLOYEE VALUES (0004, 'Michel', 'Sales')" + num + nom + departm; (err, rows, fields) => {
    if (err) throw err
  
    res.send('Ajout de Michel')
  })
 
})




connection.end()

app.listen(port, () => console.log(`Listening on port ${port}`))