const createHttpError = require("http-errors")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
const userModel = require("../../module/user/user.model");
const GuardMessage = require("./messages/guard.messages");
dotenv.config()
function Authorization(req,res,next){
    try {
        const token = req?.cookies?.access_token
        if(!token) throw new createHttpError.Unauthorized(GuardMessage.failedAuthorization)
        const verification = jwt.verify(token , process.env.SECRET_JWT)
        if(verification?.id){
            const user = userModel.findById(verification.id,{accessToken : 0 , otp : 0 , __v : 0 , updatedAt : 0 , verifiedMobile : 0})
            if(!user) throw new createHttpError.NotFound(GuardMessage.NotFoundAccount)
            req.user = user
        return next()
        }
        throw new createHttpError.Unauthorized(GuardMessage.InvalidToken)
    } catch (error) {
        next(error)
    }
}

module.exports = Authorization