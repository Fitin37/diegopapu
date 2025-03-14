import express from "express";
import reseñasCon from "../controllers/reseñasontroller.js"


const router= express.Router();

router
.route("/")
.get(reseñasCon.getReseñas)
.post(reseñasCon.postReseñas);

router
.route("/:id")
.delete(reseñasCon.deleteReseñas)
.put(reseñasCon.putReseña);

export default router;