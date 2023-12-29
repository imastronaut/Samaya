import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your Email" required />
        <input type="password" placeholder="Enter your password" required />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
