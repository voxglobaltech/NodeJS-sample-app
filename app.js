const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
 const CONNECTDB =require( './config.js/dbconfig')
const userRouter=require('./routes/user.routes')
const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use(cors());

app.use('/user',userRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  CONNECTDB()
});
