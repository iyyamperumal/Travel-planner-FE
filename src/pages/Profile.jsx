import { useState } from "react";
import { updateUser } from "../apis";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const initialProfile = JSON.parse(localStorage.getItem("user"));
    const [profile, setProfile] = useState(initialProfile);
    const [editMode, setEditMode] = useState(false);
    const [tempProfile, setTempProfile] = useState(initialProfile);

    const navi = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempProfile({ ...tempProfile, [name]: value });
    };

    const handleLogout = (e) => {
        localStorage.clear("token");
        localStorage.clear("user");
        navi("/login")

    }

    const handleEdit = () => {
        setEditMode(true);
        setTempProfile(profile);
    };

    const handleCancel = () => {
        setEditMode(false);
        setTempProfile(profile);
    };

    const handleSave = async () => {
        try {
            const data = await updateUser(profile.email, tempProfile);
            localStorage.setItem("user", JSON.stringify(data.updatedUser));
            setProfile(data.updatedUser);
        } catch (err) {
            console.log(err);
            alert(err.message);
        } finally {
            setEditMode(false);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">Profile Information</div>
                        <div className="card-body">
                            {!editMode ? (
                                <>
                                    <div className="mb-3">
                                        <label className="form-label">Name:</label>
                                        <div>{profile.name}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image:</label>
                                        <div>
                                            <img
                                                src={profile.image}
                                                alt="Profile"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description:</label>
                                        <div>{profile.description}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date of Birth:</label>
                                        <div>{profile.dob.slice(0, 10)}</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email:</label>
                                        <div>{profile.email}</div>
                                    </div>
                                    <button className="btn btn-primary me-2" onClick={handleEdit}>
                                        Edit
                                    </button>
                                    <button className="btn btn-primary me-2" style={{ backgroundColor: "red", marginLeft: "20px" }} onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="mb-3">
                                        <label className="form-label">Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={tempProfile.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="image"
                                            value={tempProfile.image}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Date of Birth:</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dob"
                                            value={tempProfile.dob.slice(0, 10)}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={tempProfile.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <button className="btn btn-success me-2" onClick={handleSave}>
                                        Save
                                    </button>
                                    <button className="btn btn-secondary" style={{ backgroundColor: "red", marginLeft: "20px" }} onClick={handleCancel}>
                                        Cancel
                                    </button>

                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
