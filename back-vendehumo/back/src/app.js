const express = require('express');
const cors = require('cors');
const http = require('http');
const appRoutes = require('./routes');


const app = express();

app.use(cors({
    origin:['http://localhost:4200']
}))

app.use(express.json());

app.use((req, res, next) => {
    console.log(2, req.body)
    next();
})

app.use(appRoutes)

app.use(()=>{
    console.log('FIN')
})

const server = http.createServer(app);

server.listen(3200, ()=>{
    console.log(`Listening on http://localhost:3200`);
})