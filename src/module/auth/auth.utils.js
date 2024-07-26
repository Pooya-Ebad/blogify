const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

function hashPassword(password){
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password,salt)
    return hash
}
function comparePassword(password,hashedPassword){
    return bcrypt.compareSync(password,hashedPassword)
}
function verifyToken(token){
    return jwt.verify(token,process.env.SECRET_JWT)
}

module.exports = {
    hashPassword,
    comparePassword,
    verifyToken
}