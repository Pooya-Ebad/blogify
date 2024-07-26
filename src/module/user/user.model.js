const { Schema, model } = require("mongoose");

const OTPSchema = new Schema({
    code : {type : String , required : false , default : undefined},
    expiresIn : {type : Number , required : false , default : 0}
})
const userSchema = new Schema({
    mobile : {type : String , required : true , unique : true},
    password : {type : String , required : true},
    otp : {type : OTPSchema},
    variationMobile : {type : Boolean , required : true , default : false},
    accessToken : {type : String}
}, {timestamps : true})
const userModel = model("user", userSchema)

module.exports = userModel