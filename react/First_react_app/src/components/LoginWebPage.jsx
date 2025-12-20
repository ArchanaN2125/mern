import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const correctUsername = "admin";
  const correctPassword = "1234";

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Login Page</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button onClick={handleLogin}>Login</button>

          <p style={{ color: "red" }}>{error}</p>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Welcome 🎉</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
}

export default App;