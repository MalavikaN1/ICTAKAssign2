const express = require('express');
const signupRouter = express.Router();

function router(nav){
    signupRouter.get("/",function(req,res, next){
        res.render("signup");
    });
    signupRouter.post("/post",function(req,res, next){
        res.render('/login',
        {
            nav,
            // title:"Library",
            signup
        });
    });
    return signupRouter;
}

module.exports = router;