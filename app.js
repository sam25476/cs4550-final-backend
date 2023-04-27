import express from 'express'
import cors from 'cors'
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import mongoose from "mongoose";
import AuthController from "./controllers/users/auth-controller.js";
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/moviereviewer';
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
    session({
                secret: "any string",
                resave: false,
                saveUninitialized: true,
            })
);

app.use(
    cors({
             credentials: true,
             origin: "http://localhost:3000",
         })
);
app.use(express.json());
AuthController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);