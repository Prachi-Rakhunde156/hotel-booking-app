import React, { useEffect, useState } from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';


function App() {
const [bookings, setBookings] = useState([]);


const fetchBookings = async () => {
const res = await fetch('http://localhost:5000/api/bookings');
const data = await res.json();
setBookings(data);
};


useEffect(() => {
fetchBookings();
}, []);


const addBooking = (newBooking) => {
setBookings(prev => [newBooking, ...prev]);
};


return (
<div className="container">
<h1>Hotel Booking App</h1>
<BookingForm onSuccess={addBooking} />
<BookingList bookings={bookings} />
</div>
);
}


export default App;