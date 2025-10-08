const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    hotelName: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    roomType: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
