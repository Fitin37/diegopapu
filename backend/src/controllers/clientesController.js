const ClientesCon ={};
import CLientesModel from "../models/CLientes.js";

ClientesCon.getClientes = async (req,res) =>{
    const clientes = await CLientesModel.find();
    res.json(clientes);
};

ClientesCon.postClientes = async (req,res) =>{
    const {Name,lastName,Birthday,email,Password,telepchone,Dui} = req.body;
    const ClienteNuevo = new CLientesModel({Name,lastName,Birthday,email,Password,telepchone,Dui});
    await ClienteNuevo.save();
    res.json({message:"Clientes guardado"});
}

ClientesCon.deleteClientes=async (req,res) =>{
    const deleteCliente = await CLientesModel.findByIdAndDelete(req.params.id);
    if(!deleteCliente){
        return res.status(404).json({message:"Cliente no encontrado"});
    }
    res.json({message:"Cliente eliminado"});
};

ClientesCon.updateClientes = async (req,res) =>{
    const {Name,lastName,Birthday,email,Password,telepchone,Dui} = req.body;

    await CLientesModel.findByIdAndUpdate(
        req.params.id,
        {
            Name,
            lastName,
            Birthday,
            email,
            Password,
            telepchone,
            Dui
        },
        {new: true}
    );
    res.json({message:"Clientes actualizado"});
}

export default ClientesCon;