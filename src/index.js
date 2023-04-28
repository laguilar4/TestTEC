const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

//Starting the server
app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});
//Routes

app.use("/api/tecnoglass",require('./routes/tecnoglass.routes'));



/*
db.connection();
 
db.connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
db.connection.end();
*/