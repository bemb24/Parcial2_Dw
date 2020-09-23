const express = require("express"); 
const bodyParser = require("body-parser"); 
const mongoose = require("mongoose");

//string de conexion
let conexion = "mongodb://conecta:123456@localhost:27017/desarrolloweb"; 

//conexión con mongo
let mongoDB = process.env.MONGODB_URI || conexion;

mongoose.connect(mongoDB); //hace la conexion a mongo db
mongoose.Promise = global.Promise;

//se define y ejecuta la conexion a mongoDB
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));

const pert = require("./routes/permanente.route");
const temp = require("./routes/temporal.route");
const app = express(); // definimos la app usando express

//definimos el uso para parsear json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//AQUÍ definimos que el punto de entrada para las rutas de productos
//deberá llevar el prefijo de products
app.use("/pert", pert);
app.use("/temp", temp);

let port = 3000;
app.listen(port, () => {
  console.log("Servidor funcionando en el puerto " + port);
});
