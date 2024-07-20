const express = require("express");
const dotenv = require("dotenv");
const db_connect = require("./Utils/db");
const app = express();
const bodyParser = require('body-parser'); // Corrected require statement
const cors = require("cors");
dotenv.config();
if (process.env.mode=='production'){

    app.use(cors())
    
    } else  {
     app.use(cors({
        origin: "http://localhost:5173"
    
    }))
    
    }
const port = process.env.PORT; // Corrected environment variable

app.use(bodyParser.json()); // Corrected bodyParser usage
app.use(cors());
app.use("/", require("./Routes/AuthRouters"));
app.get("/", (req, res) => res.send("Hello World!"));

db_connect();

app.listen(port, () => console.log(`App listening on port ${port}!`)); // Corrected console.log statement
