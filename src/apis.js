const baseUrl = import.meta.env.VITE_BE_URL;


const getToken = () => {
    return localStorage.getItem("token");
};

// APIs related to Users
const userLogin = async (data) => {
    console.log(baseUrl);
    const response = await fetch(`${baseUrl}/apis/login`, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    return await response.json();
};

const userRegister = async (data) => {
    console.log("Register Data", data);
    try {
        const response = await fetch(`${baseUrl}/apis/register`, {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok.");
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to fetch:", error);
        throw new Error("Network request failed");
    }
};



const updateUser = async (userEmail, data) => {
    const response = await fetch(`${baseUrl}/apis/users/${userEmail}`, {
        body: JSON.stringify(data),
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: getToken(),
        },
    });
    if (response.status !== 200 && response.status !== 204) {
        throw new Error("Unauthorized Entry");
    }
    return await response.json();
};

// APIs related to Plans
const createPlan = async (planData) => {
    const response = await fetch(`${baseUrl}/apis/plans`, {
        body: JSON.stringify(planData),
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: getToken(),
        },
    });
    if (response.status !== 200 && response.status !== 201) {
        throw new Error("Unauthorized Entry");
    }
    return await response.json();
};

// Get all the Logged In User Plans
const getAllPlans = async () => {
    const response = await fetch(`${baseUrl}/apis/plans`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: getToken(),
        },
    });
    if (response.status !== 200) {
        throw new Error("Something went wrong, Please try again later");
    }
    return await response.json();
};

const getOtherPlan = async () => {
    const response = await fetch(`${baseUrl}/apis/plans/other-plans`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: getToken(),
        },
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong, Please try again later");
    }
    return await response.json();
};


const deletePlan = async (planId) => {
    const response = await fetch(`${baseUrl}/apis/plans/${planId}`, {
        method: "DELETE",
    });

    if (response.status !== 200) {
        throw new Error("Something went wrong, please try again");
    }
    return response.json();
};

export {
    userLogin,
    userRegister,
    updateUser,
    createPlan,
    getAllPlans,
    deletePlan,
    getOtherPlan,
};
