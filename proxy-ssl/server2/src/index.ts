import https from 'https';
import fs from 'fs'
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const PORT = 3081;
const sslOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.use(cors());
app.use(bodyParser.json());

app.get('/b', (req:Request, res: Response) => {
  res.json("Hello from the Service B")
})

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`application run on port ${PORT}`);
});
