const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

const indexRouter = require('./routes/indexRoutes')
app.use('/', indexRouter);
app.use('/detalle/:id', indexRouter);

app.listen(3050, ()=>{
    console.log("Servidor corriendo en puerto http://localhost:3050");
})