const express = require('express');
const loginRouter = express.Router();

function router(nav){
    loginRouter.get('/', function(req,res, next){
        res.render("login");
    });
    loginRouter.post("/post", function(req,res, next){
        res.render("/index",
        {
            nav,
            // title: "Library",
            login
        });
    });
    return loginRouter;
}

module.exports = router;