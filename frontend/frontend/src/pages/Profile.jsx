// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (!loggedInUser) {
//       // If no user is logged in, redirect to login page
//       navigate("/login");
//     } else {
//       setUser(loggedInUser);
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("user"); // Remove user from localStorage on logout
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h2>You are logged in as {user}</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Profile;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (!loggedInUser) {
            navigate("/login");
        } else {
            setUser(loggedInUser);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (!user) {
        return <div className="profile-container">Loading profile...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h2>Your Profile</h2>
                <div className="profile-info">
                    <p><strong>Logged in as:</strong> {user}</p>
                </div>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
        </div>
    );
};

export default Profile;