function NotFound(req,res,nex){
    res.json({
        status : 404,
        message : "Route not found"
    })
}
module.exports = NotFound