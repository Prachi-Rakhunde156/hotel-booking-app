import React, { useState } from 'react';
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');


const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


const handleSubmit = async (e) => {
e.preventDefault();
setError('');
if (!form.name || !form.email || !form.checkIn || !form.checkOut) {
setError('Please fill required fields');
return;
}
setLoading(true);
try {
const res = await fetch('http://localhost:5000/api/bookings', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(form)
});
if (!res.ok) throw new Error('Failed to create booking');
const data = await res.json();
onSuccess(data);
setForm({ name: '', email: '', phone: '', roomType: 'Single', checkIn: '', checkOut: '' });
} catch (err) {
setError(err.message || 'Error');
} finally {
setLoading(false);
}
};


return (
<form className="form" onSubmit={handleSubmit}>
<h2>Create Booking</h2>
{error && <div className="error">{error}</div>}
<input name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
<input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
<input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" />


<label>
Room type
<select name="roomType" value={form.roomType} onChange={handleChange}>
<option>Single</option>
<option>Double</option>
<option>Deluxe</option>
</select>
</label>


<label>
Check-in
<input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} />
</label>


<label>
Check-out
<input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} />
</label>


<button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Book'}</button>
</form>
);
