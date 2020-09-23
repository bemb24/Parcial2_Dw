const Pert = require("../models/permanente.model");
const { check, validationResult } = require("express-validator");

exports.test = function (req, res) {
    res.send("Hola! Desde el controlador de pruebas");
};

//consulta de registro
exports.pert_details = function (req, res) {
    Pert.findById(req.params.id, (err, pert) =>{
        if(err){
            res.status(404).send(err)
        } return next(err);
        res.status(200).send(pert);
    });
};

//actualizar
exports.pert_update = function (req, res) {
    Pert.findByIdAndUpdate(req.params.id, { $set: req.body }, function (
      err,
      pert
    ) {
      if (err) {
        res.status(400).send(err)
    }return next(err);
      res.status(201).send("Producto Actualizado.");
    });
  };
  
  //eliminar
  exports.pert_delete = function (req, res) {
    Pert.findByIdAndRemove(req.params.id, function (err) {
      if (err){ 
        res.status(404).send(err)
      } return next(err);
      res.status(200).send("Eliminado Exitósamente!");
    });
  };
  
  //funcion para crear el registro
  exports.pert_create = [check("dpi").isLength({min: 3}), check("nit").isLength({min: 9}), check("firstname").isLength({max: 100}),
  check("lastname").isLength({max: 100}), check("datenac").isLength({max: 100}), check("nominal").isLength({max: 100}), check("funcional").isLength({max: 100}),
  check("area").isLength({max: 100}), check("emailins").isEmail, check("emailper").isEmail, check("telcasa").isLength({min: 8}), check("cel").isLength({max: 8})], 
  function (req, res) {
    //instanciamos el objeto producto
    let pert = new Pert({
      dpi: req.body.dpi,
      nit: req.body.nit,
      firstname: req.body.firstname,
      secondname: req.body.secondname,
      lastname: req.body.lastname,
      lastname2: req.body.lastname2,
      datenac: req.body.datenac,
      Apename: req.body.Apename,
      nominal: req.body.nominal,
      funcional: req.body.funcional,
      area: req.body.area,
      emailins: req.body.emailins,
      emailper: req.body.emailper,
      telcasa: req.body.telcasa,
      cel: req.body.cel,
    });
  
    //invocamos el metodo save de mongoose.
    pert.save(function (err) {
      if (err) {
        res.status(400).send(err)
        return next(err);
      }
      res.status(201).send("Registro creado con éxito");
    });
  };
  