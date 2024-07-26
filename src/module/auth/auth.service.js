const createHttpError = require("http-errors")
const userModel = require("../user/user.model")
const autoBind = require("auto-bind")
const {randomInt} = require("crypto")
const { hashPassword, comparePassword } = require("./auth.utils")
const jwt = require("jsonwebtoken")
const authMessage = require("./messages/auth.messages")

class AuthService{
    #model
    constructor(){
        autoBind(this)
        this.#model = userModel
    }
    async create(mobile,password,confirmPassword){
        if(password === confirmPassword){
            await this.#model.create({
                mobile,
                password : hashPassword(password)
            })
            return authMessage.accountCreated
        }
        return new createHttpError.BadRequest(authMessage.confirmPasswordIncorrect)
    }
    async sendOTP(mobile,password){
        const user = await this.#model.findOne({mobile})
        if(!user) return new createHttpError.Unauthorized(authMessage.userNotFound)
        if(!comparePassword(password, user.password)) return new createHttpError.Unauthorized(authMessage.passwordIncorrect)
        const now = new Date().getTime()
        if(user?.otp && user?.otp?.expiresIn > now){
            const timeRemain = (user.otp.expiresIn - now)/1000
            return {
                error : new createHttpError.BadRequest(authMessage.OtpNotExpired).message,
                timeLeft : timeRemain
            }
        }
        const otp = {
            code : randomInt(10000,99999),
            expiresIn : now + (1000 * 60 *5)
        }
        await userModel.updateOne({mobile},{otp : otp, verifiedMobile : false})
        return authMessage.OtpUpdated 
    }
    async checkOTP(mobile , code){
        const user = await this.#checkExistByMobile(mobile)
        const now = new Date().getTime()

        if(user?.otp?.expiresIn < now) return new createHttpError.Unauthorized(authMessage.OtpExpired) 
        if(user?.otp?.code !== code) return new createHttpError.Unauthorized(authMessage.OtpIncorrect) 
        if(!user.verifiedMobile) user.verifiedMobile = true

        const token = await this.#signToken({id : user._id , mobile})
        user.accessToken = token
        await user.save()
        return {
            accepted : authMessage.LoginSuccessfully,
            token : token
        }
    }
    async #checkExistByMobile(mobile){
        const user = await this.#model.findOne({mobile})
        if(!user) throw new createHttpError.NotFound(authMessage.NotFound)
        return user
    }
    async #signToken(payload){
        return jwt.sign(payload,process.env.SECRET_JWT,{expiresIn : "1y"})
    }
}

module.exports = new AuthService