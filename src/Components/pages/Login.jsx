import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');
    if (storedUserName && storedPassword) {
      setUserName(storedUserName);
      setPassword(storedPassword);
      setIsLogged(true);
    }
  }, []);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    setIsLogged(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    setUserName('');
    setPassword('');
    setIsLogged(false);
  };

  return (
    <div className="login-wrapper">
      {isLogged ? (
        <div>
          <h1>Welcome {userName}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={handleUserNameChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
