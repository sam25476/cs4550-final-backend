import express from 'express'
import cors from 'cors'
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
app.listen(process.env.PORT || 4000);