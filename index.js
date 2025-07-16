import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import productRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import { authentication } from './src/middlewares/authentication.js';
import { envs } from "./src/config/envs.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = envs.port;

app.use("/auth", authRouter);
app.use("/api", authentication, productRouter);

app.use((req, res, next) => {
    res.status(404).send("Ruta inválida.")
})


app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
})