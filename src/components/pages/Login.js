import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="row mt-5">
      <div className="col">
        <Link to="/">
          <h1 className="text-center">Login</h1>
        </Link>
      </div>
      <div className="col">
        <Link to="/register">
          <h1>Register</h1>
        </Link>
      </div>
    </div>
  );
};

export default Login;
