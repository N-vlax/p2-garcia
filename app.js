const express = require('express') ;
const app = express();

app.use((req, res) => {
    res. json({ message: 'Votre requête a bien êtê reçue !' });
});
console.log("test")


app.get(("/"), (req, res) =>{
    res.send('Tout les employés sont sélectionnés')
  })

  app.get(("/employee"), (req, res) =>{
    SELECT * FROM EMPLOYEE,
    res.send('Tout les employés sont sélectionnés')
  })
  
  app.put("UPDATE EMPLOYEE SET dept = Accounting WHERE empId = 0001") =>{
    res.send('La liste des employés à été mise à jour')
  }
  
  app.get("SELECT * FROM EMPLOYEE") =>{
    res.send('Tout les employés sont sélectionnés')
  }
  
  app.delete("DELETE FROM EMPLOYEE WHERE empId = 0003") =>{
    res.send('Employé avec id 0003 supprimé')
  }
  
  app.post("INSERT INTO EMPLOYEE VALUES (0004, 'Michel', 'Sales')") =>{
    res.send('Ajout de Michel')
  }
  
  app.get("SELECT * FROM EMPLOYEE") =>{
    res.send('Tout les employés sont sélectionnés')
  }
  
  module.exports = app;

  SELECT * FROM EMPLOYEE,