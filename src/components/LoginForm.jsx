import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    try {
      // Step 1: Send a POST request to the backend
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Tell the server we're sending JSON
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      // Step 2: Handle the response from the backend
      const data = await response.json(); // Convert response to JSON

      if (response.ok) {
        // Step 3: If login is successful, store the token
        localStorage.setItem('token', data.token); // Save token in localStorage
        // Step 4: Redirect to the dashboard or another page
        window.location.href = '/dashboard'; // Redirect to dashboard
      } else {
        // If login fails, show an error message
        setError(data.message || 'Login failed'); // Set error message
      }
    } catch (error) {
      // Handle any network or server errors
      setError('An error occurred. Please try again.'); // Set error message
      console.error('Error:', error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;