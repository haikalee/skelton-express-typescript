import express, { Express } from "express";
import { Router } from "./router/router";
import { PORT } from "./strings/const";

// initialize express server
const app: Express = express();

Router(app)

app.listen(PORT, () => {
    console.log(`server starting at port: ${PORT}`)
})