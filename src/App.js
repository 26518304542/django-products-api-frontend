import React, { useState } from 'react';
import Login from './Login';
import Products from './Products';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div className="App">
      {token ? (
        <>
          <button onClick={handleLogout}>Çıkış Yap</button>
          <Products token={token} />
        </>
      ) : (
        <Login setToken={(newToken) => {
          localStorage.setItem('token', newToken);
          setToken(newToken);
        }} />
      )}
    </div>
  );
}

export default App;
