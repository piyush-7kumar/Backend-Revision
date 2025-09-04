const express = require("express");
const currencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes")
const {verifyAuth} = require("./middleware/verify.auth")
const app = express();
const port = 8082;


app.use("/currencies",currencyRoutes)
app.use(verifyAuth)
app.use("/users",userRoutes)



app.listen(port,()=>{
    console.log("listening at ",port);
}); 