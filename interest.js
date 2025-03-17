const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all routes

app.get("/interest", (req, res) => {
    // Extract query parameters
    const Principal = parseInt(req.query.Principle);
    const Rate = parseInt(req.query.Rate);
    const time = parseInt(req.query.time);

    // Log the received values for debugging
    console.log("Received values:", { Principal, Rate, time });

    // Check if all values are valid numbers
    if (isNaN(Principal) || isNaN(Rate) || isNaN(time)) {
        return res.status(400).json({
            error: "Please provide valid numerical values for Principal, Rate, and Time."
        });
    }

    // Calculate the interest and total
    const interest = (Principal * Rate * time) / 100;
    const total = interest + Principal;

    // Log the calculated values for debugging
    console.log("Calculated interest:", interest, "Total:", total);

    // Send the result as JSON
    res.json({
        interest: interest,
        total: total
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
