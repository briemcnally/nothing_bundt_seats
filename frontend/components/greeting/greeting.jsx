import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <nav>
    <h1>Hello, {currentUser.username}</h1>
    <button onClick={logout}> Logout</button>
  </nav>
);

const sessionLinks = () => (
  <div>
    <Link to="/login">Login</Link>
    <br/>
    <br/>
    <Link to="/signup">Sign Up</Link>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);


export default Greeting;