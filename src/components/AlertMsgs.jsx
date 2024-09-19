import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMsg } from "../store/action";

const AlertMsg = () => {
    const [mounted, setMounted] = useState(false);
    const alertMsg = useSelector((state) => state.tripReducer.alert);
    const dispatch = useDispatch();

    const clearMsg = () => {
        setTimeout(() => {
            dispatch(showMsg("", ""));
        }, 5000);
    };

    useEffect(() => {
        if (mounted) {
            clearMsg();
        }
        setMounted(true);
    }, [alertMsg.msg]);

    if (!alertMsg.msg) {
        return null;
    }

    const getBgClass = () => {
        switch (alertMsg.type) {
            case "error":
                return "bg-danger";
            case "warning":
                return "bg-warning";
            case "success":
                return "bg-success";
            default:
                return "";
        }
    };

    return (
        <div
            style={{
                bottom: "50px",
                right: "25px",
                position: "fixed",
            }}
            className={`${getBgClass()} p-4`}
        >
            {alertMsg.msg}
        </div>
    );
};

export default AlertMsg;
