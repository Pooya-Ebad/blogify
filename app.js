const express = require("express")
const app = express()
const dotenv = require("dotenv")
const { swaggerConfig } = require("./src/config/swagger.config")
const cookieParser = require("cookie-parser")
const { AllRouter } = require("./app.routes")
const NotFound = require("./src/common/exception/notFound.exception")
const allException = require("./src/common/exception/All.Exception")
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
require("./src/config/mongodb.config")
app.use(cookieParser())
swaggerConfig(app)
app.use(AllRouter)
app.use(NotFound)
app.use(allException)
app.listen(process.env.PORT,()=>{
    console.log(`server : http://localhost:${process.env.PORT}`);
})