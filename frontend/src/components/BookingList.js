import React from 'react';


function BookingItem({ b }) {
return (
<div className="booking-item">
<div>
<strong>{b.name}</strong> — {b.roomType}
<div className="dates">{new Date(b.checkIn).toLocaleDateString()} → {new Date(b.checkOut).toLocaleDateString()}</div>
</div>
<div className="meta">
{b.email} {b.phone ? `• ${b.phone}` : ''}
</div>
</div>
);
}


export default function BookingList({ bookings }) {
if (!bookings.length) return <p>No bookings yet.</p>;
return (
<div className="booking-list">
<h2>Recent Bookings</h2>
{bookings.map(b => <BookingItem key={b._id} b={b} />)}
</div>
);
}