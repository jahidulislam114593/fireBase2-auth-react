import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const About = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="bg-base-200 flex justify-center px-4 py-16">
      <div>
        <h2>Name: {user?.displayName}</h2>
        <p>Email: {user?.email || "Email not available"}</p>
      </div>
    </div>
  );
};

export default About;
