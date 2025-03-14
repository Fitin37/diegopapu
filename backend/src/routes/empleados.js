import express from "express";

import EmployesCOn from "../controllers/employessControler.js";

const router = express.Router();


router
.route("/")
.get(EmployesCOn.getEmployes)
.post(EmployesCOn.postEmployes);

router
.route("/:id")
.put(EmployesCOn.putEmploye)
.delete(EmployesCOn.deleteEmploye);

export default router;