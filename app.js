let express = require("express");
const router = require("./routes/userRoutes");
let port = 4000
let app = express();
let connectionWithDB = require("./models")

app.use(express.urlencoded())
app.use(express.json());
connectionWithDB()

app.use("/users",router)


app.listen(port,function(){
    console.log(`the server is running at port ${ port}`)
})