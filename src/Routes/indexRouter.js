var express = require('express');
var indexRouter = express.Router();
function router(nav){
indexRouter.get('/', function(req, res, next) {
  console.log("got in index")
  res.render("index",{nav,title:"Library"});
});
return indexRouter;
}
/* GET users listing. */


module.exports = router;