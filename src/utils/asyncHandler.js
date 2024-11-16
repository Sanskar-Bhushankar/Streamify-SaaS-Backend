const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}

// const asyncHandler =()=>{}
// const asyncHandler=(fun)=>()=>{}
// const asyncHandler=()=>async()=>{}

// const asyncHandler =(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(err){
//         res.satus(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }