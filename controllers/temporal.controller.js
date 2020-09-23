const Temp = require("../models/temporal.model");

exports.test = function (req, res) {
    res.send("Hola! Desde el controlador de pruebas");
};

//consulta de registro
exports.temp_details = function (req, res) {
    Pert.findById(req.params.id, (err, temp) =>{
        if(err) {
            res.status(404).send(err)
        } return next(err);
        res.status(200).send(temp);
    });
};

//actualizar
exports.temp_update = function (req, res) {
    Temp.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, temp) {
      if (err){
        res.status(400).send(err)
      } return next(err);
      res.status(201).send("Producto Actualizado.");
    });
  };
  
  //eliminar
  exports.temp_delete = function (req, res) {
    Temp.findByIdAndRemove(req.params.id, function (err) {
      if (err){
        res.status(404).send(err) 
      } return next(err);
      res.status(200).send("Eliminado Exitósamente!");
    });
  };
  
  //funcion para crear el registro
  exports.temp_create = [check("name").isLength({max: 100}), check("puesto").isLength({max: 100}), check("lyg").isLength({max: 100}),
  check("tel").isLength({min: 8})],function (req, res) {
    //instanciamos el objeto producto
    let temp = new Temp({
      name: req.body.name,
      puesto: req.body.puesto,
      lyg: req.body.lyg,
      tel: req.body.tel,
    });
  
    //invocamos el metodo save de mongoose.
    temp.save(function (err) {
      if (err) {
        res.status(400).send(err)
        return next(err);
      }
      res.status(201).status(201).send("Registro creado con éxito");
    });
  };