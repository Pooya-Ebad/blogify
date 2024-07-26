const createHttpError = require("http-errors")
const authService = require("./auth.service")
const autoBind = require("auto-bind")
const NodeEnv = require("../../common/constant/env.enum")
const cookiesName = require("../../common/constant/cookie.enum")
const authMessage = require("./messages/auth.messages")
class AuthController{
    #service
    constructor() {
        autoBind(this)
        this.#service = authService
    }
    async signUp(req,res,next){
        try {
            const {mobile , password , confirmPassword} = req.body
            const result = await this.#service.create(mobile , password , confirmPassword)
            return res.json({
                message : result?.message ?? result
            })
        } catch (error) {
            next(error)
        }
    }
    async login(req,res,next){
        try {
            const { mobile , password} = req.body
            if(isNaN(+mobile)) throw createHttpError.NotFound(authMessage.mobileIncorrect) 
            const result = await this.#service.sendOTP(mobile,password)
            return res.json({
                message : result?.message ?? result
            })

        } catch (error) {
            next(error)
        }
    }
    async confirmation(req,res,next){
        try {
            const { mobile , code} = req.body
            if(isNaN(+mobile)) throw createHttpError.NotFound(authMessage.mobileIncorrect) 
            const result = await this.#service.checkOTP(mobile,code)
            return res.cookie(cookiesName.AccessToken,result.token,{
                httpOnly : true,
                secure : process.env.NODE_ENV === NodeEnv.Production
            }).json({
                message : result?.message ?? result
            })

        } catch (error) {
            next(error)
        }
    }
    async logOut(req,res,next){
        try {
            res.clearCookie(cookiesName.AccessToken).status(200).json({
                message : authMessage.LogOutSuccessfully
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController