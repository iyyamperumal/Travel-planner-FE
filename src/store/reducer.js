const initialState = {
    loading: false,
    alert: {
        msg: "",
        type: "",
    },
    selectedTrip: null,
    selectedTrips: [], // List of selected trips
};

const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case "open_loading":
            return {
                ...state,
                loading: true,
            };
        case "stop_loading":
            return {
                ...state,
                loading: false,
            };
        case "show_msg":
            return {
                ...state,
                alert: action.alert,
            };
        case "set_selected_trip":
            return {
                ...state,
                selectedTrip: action.payload,
            };
        case "add_trip_to_selected":
            return {
                ...state,
                selectedTrips: [...state.selectedTrips, action.payload],
            };
        case "remove_trip_from_selected":
            return {
                ...state,
                selectedTrips: state.selectedTrips.filter(trip => trip.placeId !== action.payload),
            };
        default:
            return state;
    }
};

export default tripReducer;
