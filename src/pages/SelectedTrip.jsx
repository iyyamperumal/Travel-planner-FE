import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTripFromSelected } from "../store/action";

const SelectedTrip = () => {
    const dispatch = useDispatch();
    const selectedTrip = useSelector((state) => state.tripReducer.selectedTrip);
    const selectedTrips = useSelector((state) => state.tripReducer.selectedTrips);



    const handleRemoveTrip = (tripId) => {
        dispatch(removeTripFromSelected(tripId));
    };

    if (!selectedTrip) {
        return <div>No trip selected</div>;
    }

    return (
        <div className="selected-trip" style={{ marginLeft: 120 }}>


            <h3>Selected Trips List</h3>
            {selectedTrips.length > 0 ? (
                <ul style={{ listStyle: "none", display: "flex" }}>
                    {selectedTrips.map(trip => (
                        <li key={trip.placeId}>
                            <div className="trip-card" style={{ margin: "10px" }}>
                                <img src={trip.image} alt={trip.place} />
                                <h1>{trip.place}</h1>
                                <h3>{trip.country}</h3>
                                <p>Price: {trip.price}</p>
                                <p>Days: {trip.days}</p>
                                <button className="button" onClick={() => handleRemoveTrip(trip.placeId)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No trips selected</p>
            )}
        </div>
    );
};

export default SelectedTrip;
