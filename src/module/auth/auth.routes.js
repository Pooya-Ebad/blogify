const { Router } = require("express");
const authController = require("./auth.controller");

const router = Router()

router.post("/signUp",authController.signUp)
router.post("/login",authController.login)
router.post("/confirmation",authController.confirmation)
router.post("/logOut",authController.logOut)

module.exports = {
    AuthRouter : router
}