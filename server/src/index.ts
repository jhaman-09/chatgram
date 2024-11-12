import express from "express"
import "dotenv/config";
import http from "http";
import cors from "cors"

const app = express();
const server = http.createServer(app);

const PORT = process.env.port || 4000;

app.use(cors({
    credentials : true
}))

server.listen(PORT, () => {
    console.log("Server is running on " + PORT);
    
})


