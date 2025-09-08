const express = require("express");
const currencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const blogsRoutes = require("./routes/blogs.routes")
const connectDB = require("./db/connect")

const app = express();
const port = 8082;
connectDB()

app.use(express.json())

app.use("/currencies",currencyRoutes)
app.use("/users",userRoutes)
app.use("/blogs",blogsRoutes)


app.listen(port,()=>{
    console.log("listening at ",port);
}); 