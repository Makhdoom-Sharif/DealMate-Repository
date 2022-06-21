const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/user");
const authRoute = require("./Routes/auth")
const productRoute = require("./Routes/product")
const cartRoute = require("./Routes/cart")
const orderRoute = require("./Routes/order")
var cors = require('cors')

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connected"))
.catch((err)=>{
    console.log(err)
})
app.use(cors())

app.use(express.json());

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is runing!");
})