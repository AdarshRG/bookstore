
const express=require("express")
const mongoose=require('mongoose')
const cors = require("cors");
// const { Book } = require("./models/bookmodel")
// const router = require("./routes/bookRoutes");
const bookRoutes = require("./routes/bookRoutes"); 
const app=express()
const port=5000
app.use(                                         //connects to frontend..best way or use app.use(cors())
    cors({
        orgin:"http://localhost:3000",
        // methods:["GET","POST","PUT","DELETE"],
        // allowedHeaders:["Content-Type"]
    })
)

app.use(express.json())                   //every req and res in json format
app.get('/',(req,res)=>{
  res.send("Hello World")
})

app.use('/',bookRoutes)            //delete every books from each method this step is for the substitute

mongoose.connect("mongodb://127.0.0.1:27017/books-collection",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
console.log("App connected to database");
app.listen(port,()=>{
    console.log(`App is running in: ${port}`);
})
}).catch((error)=>{
    console.log(error);
}) 