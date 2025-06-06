const {createServer} = require('http');

let server = createServer((request, response)=>{

    response.writeHead(200, {"content-type": "text/html"});
    response.write(`
            <h1> Ola mundo </h1>
            <p> primeira pagina com node.js </p>
        `);
    response.end();    
});
server.listen(8000)
console.log("ouvindo a porta 8000")