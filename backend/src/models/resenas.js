import { Schema,model } from "mongoose";

const reseñasSchema= new Schema({
    comentarios:{
        type:String,
        require:true
    },
    valoracion:{
        type :Number,
        require:true,
    },
    idCliente:{
     type:Schema.Types.ObjectId,
     ref: "CLientes",
     require:true
    }
},
{
    timestamps:true,
    strict:false
});

export default model("resenas",reseñasSchema);