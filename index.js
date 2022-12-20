const express = require('express');
const reg = require('./auth/reg')
const app = express();
const port = 5009;
// const path = require('path');
// const home = require('./routes/home');
// const reqFiter = require('./routes/middleware');
// const bodyParser = require('body-parser');
// const routes = require('./routes/form')
const db = require('./routes/db');
// const routes = require('./routes/api');

app.get('/', (req, res)=>{
    res.send('home page');
})


// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// app.use('/auth', reg)

// app.use('/routes', routes);

// const about = require('./routes/about');
// route.use(reqFiter);
// const public = path.join(__dirname, 'public');

// app.use('/home', home);
// app.use('/about', about);
// app.use(express.static(public));

// app.set('view engine', 'ejs')

// app.use(reqFilter)

// app.get("/", reqFiter, (req,res)=>{
//     res.sendFile(`${public}/index.html`)
// });


// app.get("/help", (req,res)=>{
    //     res.sendFile(`${public}/help.html`)
    // });
    
    // app.get('*', (req,res)=>{
        //     res.sendFile(`${public}/nopage.html`)
        // })
        
        
        // async function getData(){
//     const result = await client.connect();
//     const db = result.db(database);
//     const collection = db.collection('products');
//     const response = await collection.find({}).toArray();

//     console.log(response);
// }

// getData();

app.listen(port, ()=>{
    console.log(`Your server has started on ${port}`)
})