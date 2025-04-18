// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../index.css";
// import { registerUser } from "../services/api";

// const Signup = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [confirmPasswordError, setConfirmPasswordError] = useState("");
//     const [generalError, setGeneralError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState("");
//     const navigate = useNavigate();

//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     };

//     const handleSignup = async (e) => {
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

//         if (!password.trim()) {
//             setPasswordError("Password is required");
//             isValid = false;
//         } else if (password.length < 6) {
//             setPasswordError("Password must be at least 6 characters long");
//             isValid = false;
//         } else {
//             setPasswordError("");
//         }

//         if (!confirmPassword.trim()) {
//             setConfirmPasswordError("Confirm password is required");
//             isValid = false;
//         } else if (password !== confirmPassword) {
//             setConfirmPasswordError("Passwords do not match");
//             isValid = false;
//         } else {
//             setConfirmPasswordError("");
//         }

//         if (isValid) {
//             try {
//                 const response = await registerUser({ email, password });
//                 if (response.data) {
//                     setSuccessMessage("Signup successful! Redirecting to login...");
//                     setGeneralError("");
//                     setTimeout(() => {
//                         navigate("/login");
//                     }, 1500);
//                 }
//             } catch (err) {
//                 setGeneralError("Error during registration. Please try again.");
//                 setSuccessMessage("");
//             }
//         } else {
//             setSuccessMessage("");
//             setGeneralError("");
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSignup} className="signup-form">
//                 <div className="input-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="Your Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className={emailError ? "input-error" : ""}
//                     />
//                     {emailError && <p className="error-message">{emailError}</p>}
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         placeholder="Your Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className={passwordError ? "input-error" : ""}
//                     />
//                     {passwordError && <p className="error-message">{passwordError}</p>}
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="confirmPassword">Confirm Password:</label>
//                     <input
//                         type="password"
//                         id="confirmPassword"
//                         placeholder="Confirm Your Password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         className={confirmPasswordError ? "input-error" : ""}
//                     />
//                     {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
//                 </div>
//                 <button type="submit" className="submit-button">Sign Up</button>
//                 {generalError && <p className="error-message">{generalError}</p>}
//                 {successMessage && <p className="success-message">{successMessage}</p>}
//             </form>
//             <p>
//                 Already have an account? <Link to="/login">Login here</Link>
//             </p>
//         </div>
//     );
// };

// export default Signup;




import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { registerUser } from "../services/api";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [generalError, setGeneralError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSignup = async (e) => {
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

        if (!password.trim()) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (!confirmPassword.trim()) {
            setConfirmPasswordError("Confirm password is required");
            isValid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        } else {
            setConfirmPasswordError("");
        }

        if (isValid) {
            try {
                const response = await registerUser({ email, password });
                if (response.data) {
                    setSuccessMessage("Signup successful!");
                    setGeneralError("");
                    setTimeout(() => {
                        navigate("/login");
                    }, 1000);
                }
            } catch (err) {
                setGeneralError("Error during registration. Please try again.");
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
                <h2>Create Account</h2>
                <form onSubmit={handleSignup} className="auth-form">
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
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={passwordError ? "input-error" : ""}
                            required
                        />
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>
                    <div className="input-group">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={confirmPasswordError ? "input-error" : ""}
                            required
                        />
                        {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
                    </div>
                    <button type="submit" className="auth-button">Sign Up</button>
                    <div className="auth-links signup-link">
                        Already have an account? <Link to="/login">Login here</Link>
                    </div>
                    {generalError && <p className="error-message">{generalError}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default Signup;