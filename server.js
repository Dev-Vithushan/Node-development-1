const http = require("http")

const HOSTNAME = process.env.HOSTNAME || "localhost"
const PORT = process.env.PORT || 3000


const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader("content-type","text-plain")
    res.end("Hello world")
})


server.listen(PORT,HOSTNAME,()=>{
    console.log(`Server is running ${HOSTNAME}:${PORT}`)
})