import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOtherPlan } from "../apis";
import Trips from "./Trips";
import { showMsg } from "../store/action";

const Home = () => {
    const [plans, setPlans] = useState([]);
    const dispatch = useDispatch();

    const loadMyPlans = async () => {
        dispatch({ type: "open_loading" });
        try {
            const data = await getOtherPlan();
            setPlans(data);
        } catch (error) {
            console.error("Failed to load plans:", error.message);
            dispatch(showMsg(error.message, "error"));
        } finally {
            dispatch({ type: "stop_loading" });
        }
    };

    useEffect(() => {
        loadMyPlans();
    }, []);

    return (
        <div style={{ margin: 24 }}>
            <Trips planData={plans} />
        </div>
    );
};

export default Home;
