const { Router } = require("express");
const { AuthRouter } = require("./src/module/auth/auth.routes");
const { BlogRouter } = require("./src/module/blog/blog.routes");

const router = Router()

router.use("/auth", AuthRouter)
router.use("/blog", BlogRouter)

module.exports = {
    AllRouter : router
}