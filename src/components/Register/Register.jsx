import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    } else if (password.length < 6) {
      setError("Password should be more than 6 characters.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    setError("");
    registerUser(email, password)
      .then((res) => setUser(res.user))
      .catch((error) => setError(error.message));
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto border-2 border-blue-500 rounded-xl">
      <h2 className="text-2xl py-4">Register Page</h2>
      <form onSubmit={handleRegister} className="text-center">
        <div className="py-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="py-4">
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered w-full "
          />
        </div>
        <div className="py-4">
          <input
            name="photo"
            type="text"
            placeholder="Photo"
            className="input input-bordered w-full "
          />
        </div>
        <div className="py-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full "
          />
        </div>
        <div className="py-4">
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full "
          />
        </div>
        {error && <small className="text-red-800">{error}</small>}
        <button className="btn btn-primary w-full my-4">Register</button>
      </form>
    </div>
  );
};

export default Register;
