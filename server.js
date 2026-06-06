const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // frontend serve karega

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    guests: String,
    checkin: String,
    checkout: String,
    roomType: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model("Booking", bookingSchema);

// POST API (IMPORTANT)
app.post("/booking", async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();

        res.json({ success: true, message: "Booking saved" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});