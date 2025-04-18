// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../index.css";
// import { forgotPassword } from "../services/api";

// const ForgotPassword = () => {
//     const [email, setEmail] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [newPasswordError, setNewPasswordError] = useState("");
//     const [generalError, setGeneralError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState("");
//     const navigate = useNavigate();

//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     };

//     const handleReset = async (e) => {
//         e.preventDefault();
//         let isValid = true;

//         if (!email.trim()) {
//             setEmailError("Email is required");
//             isValid = false;
//         } else if (!validateEmail(email)) {
//             setEmailError("Invalid email format");
//             isValid = false;
//         } else {
//             setEmailError("");
//         }

//         if (!newPassword.trim()) {
//             setNewPasswordError("New password is required");
//             isValid = false;
//         } else if (newPassword.length < 6) {
//             setNewPasswordError("New password must be at least 6 characters long");
//             isValid = false;
//         } else {
//             setNewPasswordError("");
//         }

//         if (isValid) {
//             try {
//                 await forgotPassword({ email, new_password: newPassword });
//                 setSuccessMessage("Password reset successfully! Redirecting to login...");
//                 setGeneralError("");
//                 setTimeout(() => {
//                     navigate("/login");
//                 }, 1500);
//             } catch (err) {
//                 setGeneralError("Error resetting password: " + (err.response?.data?.detail || err.message));
//                 setSuccessMessage("");
//             }
//         } else {
//             setSuccessMessage("");
//             setGeneralError("");
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Reset Password</h2>
//             <form onSubmit={handleReset} className="forgot-password-form">
//                 <div className="input-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="Your Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className={emailError ? "input-error" : ""}
//                         required
//                     />
//                     {emailError && <p className="error-message">{emailError}</p>}
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="newPassword">New Password:</label>
//                     <input
//                         type="password"
//                         id="newPassword"
//                         placeholder="New Password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         className={newPasswordError ? "input-error" : ""}
//                         required
//                     />
//                     {newPasswordError && <p className="error-message">{newPasswordError}</p>}
//                 </div>
//                 <button type="submit" className="submit-button">Reset Password</button>
//                 {generalError && <p className="error-message">{generalError}</p>}
//                 {successMessage && <p className="success-message">{successMessage}</p>}
//             </form>
//             <div className="mt-4">
//                 <Link to="/login" className="link">Back to Login</Link>
//             </div>
//         </div>
//     );
// };

// export default ForgotPassword;


import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { forgotPassword } from "../services/api";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [generalError, setGeneralError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleReset = async (e) => {
        e.preventDefault();
        let isValid = true;

        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Invalid email format");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!newPassword.trim()) {
            setNewPasswordError("New password is required");
            isValid = false;
        } else if (newPassword.length < 6) {
            setNewPasswordError("New password must be at least 6 characters long");
            isValid = false;
        } else {
            setNewPasswordError("");
        }

        if (isValid) {
            try {
                await forgotPassword({ email, new_password: newPassword });
                setSuccessMessage("Password reset successfully!");
                setGeneralError("");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } catch (err) {
                setGeneralError("Error resetting password: " + (err.response?.data?.detail || err.message));
                setSuccessMessage("");
            }
        } else {
            setSuccessMessage("");
            setGeneralError("");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Reset Password</h2>
                <form onSubmit={handleReset} className="auth-form">
                    <div className="input-group">
                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={emailError ? "input-error" : ""}
                            required
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                    </div>
                    <div className="input-group">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className={newPasswordError ? "input-error" : ""}
                            required
                        />
                        {newPasswordError && <p className="error-message">{newPasswordError}</p>}
                    </div>
                    <button type="submit" className="auth-button">Reset Password</button>
                    {generalError && <p className="error-message">{generalError}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
                <div className="auth-links">
                    <Link to="/login">Back to Login</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;