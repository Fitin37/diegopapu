    import { Schema,model } from "mongoose";

    const clienteSchema = new Schema({
        Name:{
            type:String,
            require:true
        },
        lastName:{
            type:String,
            require:true
        },
        Birthday:{
            type:String,
            require:true
        },
        email:{
        type:String,
        require:true
        },
        Password:{
            type:String,
            require:true
        },
        telepchone:{
            type:Number,
            require:true
        },
        Dui:{
            type: Number,
            require:true
        },

    },{
        timestamps:true,
        strict:false
    });
    
    export default model("CLientes",clienteSchema);