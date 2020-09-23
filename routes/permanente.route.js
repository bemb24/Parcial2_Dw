const express = require("express");
const router = express.Router();

const pert_controller = require ("../controllers/permanente.controller");

//definicion de rutas

//prueba
router.get("/test", pert_controller.test);

//crear un registro
router.post("/create", pert_controller.pert_create);

//consulta por id
router.get("/:id", pert_controller.pert_details);

//actualizacion
router.put("/:id/update", pert_controller.pert_update);

//eliminar
router.delete("/:id/delete", pert_controller.pert_delete);

module.exports = router;