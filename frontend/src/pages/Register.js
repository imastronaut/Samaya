import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <input
          type="password"
          name="confirmPwd"
          placeholder="Confirm your password"
          required
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
