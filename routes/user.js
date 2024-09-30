import express from 'express'
const router = express.Router();

router.get('/',(req,res)=>{
    return res.status(200).json({success:true,message:"Hello Node"});
})

export default router;