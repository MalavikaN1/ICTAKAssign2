const express = require('express');
const port = process.env.PORT || 5000;
const http = require('http');
const path = require('path');
// const bodyParser = require('body-parser');

const nav = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/login',
        name:'Login'
    },
    {
        link:'/signup',
        name:'signup'
    },
    // {
    //     link:'/admin',
    //     name:'Add Book'
    // },
    // {
    //     link:'/addauth',
    //     name:'Add Author'
    // }
];

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require("./src/Routes/indexRouter")(nav);
var booksRouter = require('./src/Routes/bookRoutes')(nav);
var authorsRouter = require('./src/Routes/authorRoutes')(nav);
var loginRouter = require('./src/Routes/loginRouter')(nav);
var signupRouter = require('./src/Routes/signupRouter')(nav);

const  app = new express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');              //setting the view engine
// app.set('views', __dirname+'/src/views');   //setting the initial path
app.set('views', path.join(__dirname, './src/views'));

app.use('/',indexRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);



app.get('/',function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",
    {
        nav,
        title:'Library'
    });        //render is used instead of sendFile in ejs
});



app.listen(port);