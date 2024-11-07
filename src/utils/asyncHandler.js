const asyncHandler = (requestHandler)=> {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,req,next)).catch((err) => next(err))
    }
}

export {asyncHandler}