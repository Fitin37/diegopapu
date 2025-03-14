const reseñasCon = {};
import reseñasMOdel from "../models/resenas.js";

reseñasCon.getReseñas = async (req,res) =>{
    const Reseñas= await reseñasMOdel.find();
    res.json(Reseñas);
};

reseñasCon.postReseñas = async (req,res) =>{
    const{comentarios,valoracion,idCliente} = req.body;
    const nuevaReseña=new reseñasMOdel({comentarios,valoracion,idCliente});
    await nuevaReseña.save();
    res.json({message: "reseña guardada"});
};


reseñasCon.deleteReseñas =async (re,res) => {
    const eliminarReseña= await reseñasMOdel.findByIdAndDelete(req.params.id);
    if(!eliminarReseña){
     return res.status(404).json({message: "reseña no encontrada"});
    }
    res.json({message: "reseña eliminada"});
};

reseñasCon.putReseña = async (req,res) => {
    const{comentarios,valoracion,idCliente} = req.body;
     await reseñasMOdel.findByIdAndDelete( req.params.id,{
        comentarios,
        valoracion,
        idCliente
     },
    {new : true});
    res.json({message: "reseña actuañizada"})
};

export default reseñasCon;