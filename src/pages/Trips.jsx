import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTrip, addTripToSelected } from "../store/action";

const Trips = () => {
    const dispatch = useDispatch();

    const selectedTrips = useSelector((state) => state.tripReducer.selectedTrips);
    const [selectedTrip, setLocalSelectedTrip] = useState(null); // Local state for selected trip

    const planData = [
        {
            placeId: "1",
            place: "Bali",
            image: "https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1654586251/blog/wsnqunszlajd5ypjo29l.webp",
            country: "Indonesia",
            price: "60000/head",
            days: 5,
        },
        {
            placeId: "2",
            place: "Ladakh",
            image: "https://grandholidayparkvacation.com/uploads/62208357b184e_1646297943.jpg",
            country: "India",
            price: "20000/head",
            days: 5,
        },
        {
            placeId: "3",
            place: "Dubai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9SUlHR9wpgK67Mb_Z4fMZadB0fBGWckyYQ&s",
            country: "UAE",
            price: "40000/head",
            days: 5,
        },
        {
            placeId: "4",
            place: "Paris",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cx8p54FTlCPtGnwH7LgDedCWmFgOUj5O1w&s",
            country: "France",
            price: "80000/head",
            days: 5,
        },
        {
            placeId: "5",
            place: "Barcelona",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ejPPJNCJNkEZczg_tEqSxAZObUPRxLqgKQ&s",
            country: "Spain",
            price: "100000/head",
            days: 5,
        },
    ];

    const handleAddTrip = (trip) => {
        setLocalSelectedTrip(trip); // Set the selected trip locally
        dispatch(setSelectedTrip(trip)); // Set it globally in Redux

        // Add trip only if it isn't already in the selectedTrips list
        if (!selectedTrips.find(selected => selected.placeId === trip.placeId)) {
            dispatch(addTripToSelected(trip));
        }
    };

    return (
        <div className="trips-container">
            {planData.map((trip) => (
                <div key={trip.placeId} className="trip-card">
                    <img src={trip.image} alt={trip.place} />
                    <h1>{trip.place}</h1>
                    <h3>{trip.country}</h3>
                    <span
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <h6>{trip.price}</h6>
                        <h6>{trip.days} days</h6>
                    </span>
                    <button className="button" onClick={() => handleAddTrip(trip)}>Add to List</button>
                </div>
            ))}
        </div>
    );
};

export default Trips;
