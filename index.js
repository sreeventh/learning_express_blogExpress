import express from 'express';
import route from './routes/user.js';
import bodyParser from 'body-parser';
import cors from "cors"


const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);

app.use("/", route);


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});



