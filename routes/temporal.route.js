const express = require("express");
const router = express.Router();

const temp_controller = require ("../controllers/temporal.controller");

//definicion de rutas

//prueba
router.get("/test", temp_controller.test);

//crear un registro
router.post("/create", temp_controller.temp_create);

//consulta por id
router.get("/:id", temp_controller.temp_details);

//actualizacion
router.put("/:id/update", temp_controller.temp_update);

//eliminar
router.delete("/:id/delete", temp_controller.temp_delete);

module.exports = router;