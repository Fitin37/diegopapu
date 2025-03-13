import express from "express";

import ClientesCon from "../controllers/clientesController.js";

const router=express.Router();

router
.route("/")
.get(ClientesCon.getClientes)
.post(ClientesCon.postClientes);

router.route("/:id")
.put(ClientesCon.updateClientes)
.delete(ClientesCon.deleteClientes);

export default router;