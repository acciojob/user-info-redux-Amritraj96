import React from "react";
import { useSelector, useDispatch } from "react-redux";
import '../styles/App.css';

const App = () => {
  // Access state from Redux store
  const { name, email } = useSelector((state) => state);
  
  // Dispatch function to send actions to Redux
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch({ type: 'UPDATE_NAME', payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value });
  };

  return (
    <div>
      {/* Required Header */}
      <h1>User Information</h1>
      
      <div className="form-container">
        <label>
          Name:
          {/* Required Text Input */}
          <input 
            type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Email:
          {/* Required Email Input */}
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </div>

      {/* Required Output Section */}
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

export default App;
