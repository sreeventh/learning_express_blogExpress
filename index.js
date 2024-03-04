import express from 'express';
import route from './routes/user.js';
import bodyParser from 'body-parser';
import cors from "cors"


const app = express();
const port = 4000;



app.use("/", route)


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})



