const sql = require('../database/database');
const tecnoCtrl = {};

tecnoCtrl.insertClient = async(req, res) => 
{
    sql.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
        result(null, { id: res.insertId, ...newTutorial });
      });   
}

tecnoCtrl.insertOrder = async(req, res) => 
{
    sql.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
        result(null, { id: res.insertId, ...newTutorial });
      });   
}

tecnoCtrl.getClients = async(req, res) => 
{
    
}

tecnoCtrl.getOrders = async(req, res) => 
{
    
}

tecnoCtrl.insertItem = async(req, res) => 
{
    
}

tecnoCtrl.getItem = async(req, res) => 
{
    
}

module.exports = tecnoCtrl;