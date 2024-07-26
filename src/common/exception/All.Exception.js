function allException(err,req,res,next){
    console.log(err);
    res.json({
        status : err?.status ?? err?.statusCode ?? 500,
        message: err?.message ?? err?.error?.message ?? "InternalServerError"
    })
}

module.exports = allException