import express from "express";
const app = express(); // create express app
import path from 'path'
import { fileURLToPath } from 'url';
import router from './server/routes/index.js'
import morgan from "morgan";
import cors from 'cors'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors())
// add middleware
app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/api", router);
app.use(morgan('dev'))

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
})
// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});