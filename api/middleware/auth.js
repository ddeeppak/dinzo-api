const jwt= require('jsonwebtoken');

module.exports =(req,res,next)=>{
    try{
        const decode= jwt.verify(req.body.Token,"5454545s5v4ds5454vsd");
        req.userdata=decode;
        next();
        
    }
    catch(err){ res.status(402).json({
        message:"Auth Failed"
    })

    }
}