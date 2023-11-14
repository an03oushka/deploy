import React, { useState } from "react";
import "../styles/Events.css"
const Events = () => {
    const [events, setEvents] = useState([]);

 
    const addEvent = (eventData) => {
        setEvents([...events, eventData]);
    };

    return (
        <div>
            <h2>User events</h2>
            
            <form onSubmit={(e) => {
                e.preventDefault();
                
                const formData = new FormData(e.target);
                addEvent({
                    name: formData.get("name"),
                    amount: formData.get("amount"),
                    date: formData.get("date"),
                    paid: formData.get("paid") === "on",
                });
                
                e.target.reset();
            }}>
                <input type="text" name="name" placeholder="Event Name" />
                <input type="number" name="amount" placeholder="Amount" />
                <input type="date" name="date" />
                <label>
                    Paid
                    <input type="checkbox" name="paid" />
                </label>
                <button type="submit">Add</button>
            </form>

            
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        
                        {event.name} - ₹{event.amount} - {event.date} - {event.paid ? "Paid" : "Not Paid"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
