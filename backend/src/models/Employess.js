import { Schema,model } from "mongoose";

const employesSchema = new Schema({
nameEmployes:{
    type:String,
    require:true
},
lastname:{
    type:String,
    require:true
},
birthday:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
address:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},
telephone:{
    type:String,
    require:true
},
dui:{
    type:String,
    require:true
}
},{
    timestamps:true,
    strict:false
});

export default model("Employess",employesSchema);