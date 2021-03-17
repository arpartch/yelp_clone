require("dotenv").config();
const express = require("express");

const app = express();

app.get("/getRestaurants", (requ, res) => {
    res.json({
        status: "success",
        restaurant: "shake shack",
    })
});
//http://localhost:4000/getRestaurants


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});