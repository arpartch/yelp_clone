require("dotenv").config();
const express = require("express");
const morgan = require('morgan')
const app = express();


app.use(express.json())


// Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    console.log("route handler ran")
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["Shake Shack", "P.F. Changs", "Mario's Pizza"] 
        },
    })
});
//http://localhost:4000/api/v1/restaurants


// Get single restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
});

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});