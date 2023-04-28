const sql = require('../database/database');
const tecnoCtrl = {};

tecnoCtrl.insertClient = async(req, res) => 
{
  let nombre = req.body.NOMBRE;
  let apellido = req.body.APELLIDO;
  let direccion = req.body.DIRECCION;
  let telefono = req.body.TELEFONO;
  let nacionalidad = req.body.NACIONALIDAD;
  let correo = req.body.CORREO;
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('INSERT INTO tecnoglass.cliente(NOMBRE, APELLIDO, DIRECCION, TELEFONO, NACIONALIDAD, CORREO, F_CREA) VALUES(?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP())', [nombre, apellido, direccion, telefono, nacionalidad, correo],  function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}

tecnoCtrl.updateClient = async(req, res) => 
{
  let id = req.params.id;
  let nombre = req.body.NOMBRE;
  let apellido = req.body.APELLIDO;
  let direccion = req.body.DIRECCION;
  let telefono = req.body.TELEFONO;
  let nacionalidad = req.body.NACIONALIDAD;
  let correo = req.body.CORREO;
  
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('UPDATE tecnoglass.cliente SET NOMBRE = ? , APELLIDO = ?, DIRECCION = ?, TELEFONO = ?, NACIONALIDAD = ?, CORREO = ? WHERE ID = ?', [nombre, apellido, direccion, telefono, nacionalidad, correo, id],  function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}
tecnoCtrl.deleteClient = async(req, res) => 
{
  let idItem = req.params.id;
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('DELETE FROM tecnoglass.cliente WHERE ID = ?', [idItem],   function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}


tecnoCtrl.insertOrder = async(req, res) => 
{
  let id_cliente = req.body.ID_CLIENTE;
  let id_item = req.body.ID_ITEM;
  let estado = 'SOLICITADA';
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('INSERT INTO tecnoglass.orden(ID_CLIENTE, ID_ITEM, FECHA, ESTADO) VALUES(?, ?, CURRENT_TIMESTAMP(), ?)', [id_cliente, id_item, estado],  function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}

tecnoCtrl.updateOrder = async(req, res) => 
{
  let id = req.params.id;
  let estado = req.body.ESTADO;
  
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('UPDATE tecnoglass.orden SET ESTADO = ? WHERE ID = ?', [estado, id],  function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}

tecnoCtrl.getClients = async(req, res) => 
{
  
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('SELECT * FROM tecnoglass.cliente', function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}

tecnoCtrl.getOrders = async(req, res) => 
{
  
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('SELECT * FROM tecnoglass.orden', function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}

tecnoCtrl.getOrdersSolic = async(req, res) => 
{
  
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('SELECT tcp.ID, tcc.NOMBRE, tcc.APELLIDO, tci.DESCRIP, tci.ANCHO, tci.LARGO, tcp.ESTADO FROM tecnoglass.orden tcp LEFT JOIN tecnoglass.cliente tcc ON tcp.ID_CLIENTE = tcc.ID LEFT JOIN tecnoglass.item tci ON tcp.ID_ITEM = tci.ID WHERE tcp.ESTADO = "SOLICITADA"', function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}

tecnoCtrl.insertItem = async(req, res) => 
{
  let desc = req.body.DESCRIP;
  let ancho = req.body.ANCHO;
  let largo = req.body.LARGO;
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('INSERT INTO tecnoglass.item(DESCRIP, ANCHO, LARGO, FECHA) VALUES (?, ?, ?, CURRENT_TIMESTAMP())', [desc, ancho, largo], function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}

tecnoCtrl.getItem = async(req, res) => 
{
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('SELECT * FROM tecnoglass.item', function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  });
}

tecnoCtrl.deleteItem = async(req, res) => 
{
  let idItem = req.params.id;
  sql.getConnection((error, connection) => {
    if(error)
    {
      console.log(error);
      throw error;
    }
    else
    {
      connection.query('DELETE FROM tecnoglass.item WHERE ID = ?', [idItem], function(error, results, fields) {
        if(error)
        {
          console.log(error);
          throw error;
        }else
        {
          res.send(results);
          connection.destroy();
        }
      });
    }
  }); 
}

module.exports = tecnoCtrl;