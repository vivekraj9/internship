// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../index.css';
// import { loginUser } from "../services/api";

// const Signin = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [loginError, setLoginError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState("");
//     const navigate = useNavigate();

//     const validateEmail = (email) => {
//         const re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     };

//     const handleSubmit = async (e) => {
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

//         if (isValid) {
//             try {
//                 const response = await loginUser({ email, password });
//                 localStorage.setItem('user', email);
//                 setSuccessMessage("Login successful! Redirecting to profile...");
//                 setLoginError("");
//                 setTimeout(() => {
//                     navigate('/profile');
//                 }, 1500);
//             } catch (error) {
//                 console.error("Login failed:", error);
//                 setLoginError("Invalid email or password.");
//                 setSuccessMessage("");
//             }
//         } else {
//             setSuccessMessage("");
//             setLoginError("");
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit} className="signin-form">
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
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         placeholder="Your Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className={passwordError ? "input-error" : ""}
//                         required
//                     />
//                     {passwordError && <p className="error-message">{passwordError}</p>}
//                 </div>
//                 <button type="submit" className="submit-button">Login</button>
//                 {loginError && <p className="error-message">{loginError}</p>}
//                 {successMessage && <p className="success-message">{successMessage}</p>}
//             </form>
//             <div className="links">
//                 <button type="button" onClick={() => navigate("/signup")}>Sign Up</button>
//                 <button type="button" onClick={() => navigate("/forgot-password")}>Forgot Password?</button>
//             </div>
//         </div>
//     );
// };

// export default Signin;





import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import { loginUser } from "../services/api";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = async (e) => {
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

        if (isValid) {
            try {
                const response = await loginUser({ email, password });
                localStorage.setItem('user', email);
                setSuccessMessage("Login successful!");
                setLoginError("");
                setTimeout(() => {
                    navigate('/profile');
                }, 1000);
            } catch (error) {
                console.error("Login failed:", error);
                setLoginError("Invalid email or password.");
                setSuccessMessage("");
            }
        } else {
            setSuccessMessage("");
            setLoginError("");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="input-group">
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                        <input
                            type="text" // Changed to text to accommodate "Email or Phone"
                            id="email"
                            placeholder="Email or Phone"
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
                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>
                    <button type="submit" className="auth-button">Login</button>
                    <div className="auth-links signup-link">
                        Not a member? <Link to="/signup">Signup now</Link>
                    </div>
                    {loginError && <p className="error-message">{loginError}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default Signin;