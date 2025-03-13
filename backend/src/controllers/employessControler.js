const EmployesCOn= {};
import EmployesModel from "../models/Employess.js"

EmployesCOn.getEmplyes = async (req,res) =>{
    const employes = await EmployesModel.find();
    res.json(employes);
};
