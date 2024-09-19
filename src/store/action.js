export const setSelectedTrip = (trip) => ({
    type: "set_selected_trip",
    payload: trip,
});

export const addTripToSelected = (trip) => ({
    type: "add_trip_to_selected",
    payload: trip,
});

export const removeTripFromSelected = (tripId) => ({
    type: "remove_trip_from_selected",
    payload: tripId,
});

export const showMsg = (msg, msgType) => ({
    type: "show_msg",
    alert: { msg, type: msgType },
});
