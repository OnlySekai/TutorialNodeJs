const { rmSync } = require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end(`welcom`);
    }
    if(req.url===`/about`){
        res.end(`here is short about us`);
    }
    res.end(`
    <h1>Oops</h1>`)
})

server.listen(5100);