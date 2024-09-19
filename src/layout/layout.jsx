import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import AlertMsg from "../components/AlertMsgs";

const links = [
    {
        name: "Home",
        path: "/",
        icon: <i className="fa-solid fa-house fa-2x"></i>,
    },
    {
        name: "Selected Trips",
        path: "/selected-trips",
        icon: <i className="fa-solid fa-bars fa-2x"></i>,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: <i className="fa-solid fa-user fa-2x"></i>,
    },
];

const Loader = () => {
    const showLoading = useSelector((state) => state.tripReducer.loading);

    return (
        <div
            style={{
                zIndex: 999999,
                position: "fixed",
                height: "100vh",
                width: "100%",
                display: showLoading ? "flex" : "none",
                placeContent: "center",
                placeItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                top: 0,
            }}
        >
            <i
                className="fa-solid fa-spinner fa-spin fa-3x"
                style={{ color: "white" }}
            ></i>
        </div>
    );
};

const Layout = () => {
    return (
        <>
            <aside
                style={{
                    padding: "8px",
                    position: "fixed",
                    top: 0,
                    backgroundColor: "#ccc",
                    height: "100vh",
                }}
            >
                {links.map((link) => (
                    <div key={link.path} style={{ margin: 16 }}>
                        <Link to={link.path}>
                            {link.icon}
                            <span style={{ fontSize: 24, padding: "0 8px" }}>
                                {link.name}
                            </span>
                        </Link>
                    </div>
                ))}
            </aside>
            <div style={{ height: "100vh", marginLeft: 200 }}>
                <Outlet />
            </div>
            <Loader />
            <AlertMsg />
        </>
    );
};

export default Layout;
