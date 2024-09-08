import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ authData }) => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (authData.name === name && authData.pin === pin) {
      navigate('/dashboard');
    } else {
      alert('Incorrect name or PIN');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Enter Name" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <br />
      <input 
        type="password" 
        placeholder="Enter 4-digit PIN" 
        value={pin}
        onChange={(e) => setPin(e.target.value)} 
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
