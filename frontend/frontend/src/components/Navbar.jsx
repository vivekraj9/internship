import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8000/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).finally(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    }
  };

  return (
    <nav>
      <Link to="/register">Signup</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/forgot-password">Forgot Password</Link> |{" "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
