const sucursalesCon = {};
import sucusalesModel from "../models/sucursales.js"

sucursalesCon.getSucursales = async (req,res) =>{
    const sucursales= await sucusalesModel.find();
    res.json(sucursales);
};

sucursalesCon.postSucursales = async (req,res) =>{
    const {nombre,address,telephone} = req.body;
    const sucursal = new sucusalesModel({nombre,address,telephone});
    await sucursal.save();
    res.json({message:"sucursal guardada"});
};

sucursalesCon.deleteSucursal = async (req,res) => {
    const eliminarSucursal= await sucusalesModel.findByIdAndDelete(req.params.id);
    if(!eliminarSucursal){
        return res.status(404).json({message:"sucursal no encontrada"});
    }
    res.json({message:"sucursal eliminada"});
};

sucursalesCon.putSucursal = async (req,res) =>{
    const {nombre,address,telephone} = req.body;
     
    await sucusalesModel.findByIdAndUpdate(
        req.params.id,{
            nombre,
            address,
            telephone
        },{new : true}
    );
    res.json({message:"sucursal actualizada"});
};

export default sucursalesCon;