const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create booking
router.post('/', async (req, res) => {
    const { customerName, hotelName, checkInDate, checkOutDate, roomType, price } = req.body;

    if (!customerName || !hotelName || !checkInDate || !checkOutDate || !roomType || !price) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const booking = new Booking({ customerName, hotelName, checkInDate, checkOutDate, roomType, price });
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// DELETE booking by ID
router.delete('/:id', async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });
        res.json({ message: "Booking deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
