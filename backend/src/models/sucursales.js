import { Schema,model } from "mongoose";

const sucursalesSchema= new Schema({
    nombre:{
        type:String
    },
    address:{
        type:String
    },
    telephone:{
        type:String
    }
},{
    timestamps:true,
    strict:false
});


export default model("sucursales",sucursalesSchema);