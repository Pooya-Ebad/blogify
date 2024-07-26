const {Router} = require("express");
const {blogController} = require("./blog.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();
router.get("/findAll", Authorization, blogController.findAll)
router.post("/create", Authorization, blogController.create)
router.delete("/delete", Authorization, blogController.delete)
module.exports = {
    BlogRouter: router
}