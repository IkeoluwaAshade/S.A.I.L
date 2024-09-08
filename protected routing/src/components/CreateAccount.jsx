import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 {/* useNavigate: This is a hook from react-router-dom that allows us to programmatically navigate between routes (e.g., redirect users after they submit their data). */}

const CreateAccount = ({ setAuthData }) => { 
  /* ({ setAuthData }): The component receives setAuthData as a prop. This function will be used to store the user's name and PIN after submission. The data is lifted to the parent component (App.js), which manages global state. */

  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();
  /* useNavigate: The navigate function is initialized here, which can be used to redirect users to different routes within the application after they submit valid data. */

  const handleCreateAccount = () => {
    if (name && pin.length === 4) {
      setAuthData({ name, pin });
      navigate('/dashboard');  // Navigate to the protected route
    } else {
      alert('Please enter a valid name and 4-digit PIN');
    }
  };

  /* handleCreateAccount: This function is triggered when the user clicks the "Submit" button.
if (name && pin.length === 4): This checks if both the name is provided and the PIN has exactly 4 digits. If this condition is met:
setAuthData({ name, pin }): The user's name and PIN are saved by calling the setAuthData function, which was passed as a prop. This stores the data in the parent component (App.js).
navigate('/dashboard'): The navigate function redirects the user to the /dashboard route after the account is created.
else: If the validation fails (either no name is provided or the PIN is not 4 digits long), an alert message is shown, prompting the user to enter valid details. */

  return (
    <div>
      <h2>Create Account</h2>
      <input 
        type="text" 
        placeholder="Enter Name" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <br />
      <input 
        type="password" 
        placeholder="Create 4-digit PIN" 
        value={pin}
        onChange={(e) => setPin(e.target.value)} 
      />
      <br />
      <button onClick={handleCreateAccount}>Submit</button>
     
    </div>
  );
};

export default CreateAccount;
