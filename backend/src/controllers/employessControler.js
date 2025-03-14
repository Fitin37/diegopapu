const EmployesCOn= {};

import EmployesModel from "../models/Employess.js"

EmployesCOn.getEmployes = async (req,res) =>{
    const employes = await EmployesModel.find();
    res.json(employes);
};

EmployesCOn.postEmployes = async (req,res) =>{
    const {nameEmployes,lastname,birthday,email,address,password,elephone,dui} = req.body;
    const empleado= new EmployesModel({nameEmployes,lastname,birthday,email,address,password,elephone,dui});
    await empleado.save();
    res.json({message:"empleado guardado"});
};

EmployesCOn.putEmploye = async (req,res) =>{
    const {nameEmployes,lastname,birthday,email,address,password,elephone,dui} = req.body;

    await EmployesModel.findByIdAndUpdate(
        req.params.id,
        {
            nameEmployes,
            lastname,
            birthday,
            email,
            address,
            password,
            elephone,
            dui
        },
        {new : true}
    );
      res.json({message: "empleado editado"});
};

EmployesCOn.deleteEmploye = async (req,res) =>{
    const deleteEmploye= await EmployesModel.findByIdAndDelete(req.params.id);
    if(!deleteEmploye){
        return res.status(404).json({message:"empleado no encontrado"});
    }
      res.json({message:"Empleado eliminado correctamente"});
};

export default EmployesCOn;


