import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, googleLogin, setUser, githubLogin, facebookLogin, user } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password).then((res) => setUser(res.user));
  };

  const handleGoogleLogin = () => {
    googleLogin().then((res) => setUser(res.user));
  };

  const handleGithubLogin = () => {
    githubLogin().then((res) => setUser(res.user));
  };

  const handleFacebookLogin = () => {
    facebookLogin().then((res) => setUser(res.user));
  };
  useEffect(() => {
    if (user) {
      navigate(location.state);
    }
  }, [user]);
  return (
    <div className="w-full max-w-md p-4 mx-auto border-2 border-blue-500 rounded-xl">
      <h2 className="text-2xl py-4">Login Page</h2>
      <form onSubmit={handleLogin} className="text-center">
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
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full "
          />
        </div>

        <button className="btn btn-primary w-full">Login</button>
      </form>
      <div className="">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary my-4 mr-4"
        >
          Google Login
        </button>
        <button
          onClick={handleGithubLogin}
          className="mr-4 btn btn-primary my-4"
        >
          GitHub Login
        </button>
        <button onClick={handleFacebookLogin} className="btn btn-primary my-4">
          Facebook Login
        </button>
      </div>
    </div>
  );
};

export default Login;
