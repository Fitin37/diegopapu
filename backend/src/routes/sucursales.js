import express from "express";

import sucursalesCon from "../controllers/sucursalesController.js";

const router = express.Router();

router
.route("/")
.get(sucursalesCon.getSucursales)
.post(sucursalesCon.postSucursales);

router
.route("/:id")
.delete(sucursalesCon.deleteSucursal)
.put(sucursalesCon.putSucursal);

export default router;