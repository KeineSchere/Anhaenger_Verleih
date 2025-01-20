import React, { useState } from 'react';
import './Login.css'; // Optionales CSS für das Styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Diese Funktion wird beim Absenden des Formulars aufgerufen
  const handleSubmit = (e) => {
    e.preventDefault();  // Verhindert das Neuladen der Seite

    // Hier kannst du Logik für das Formular hinzufügen
    console.log('Benutzername:', username);
    console.log('Passwort:', password);
  };

  return (
    <div>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}> {/* Verhindert den Standard-Formular-Submit */}
          <div className="input-group">
            <label htmlFor="username">Benutzername:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Benutzername eingeben"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  // Speichert den Benutzernamen im Zustand
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Passwort:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Passwort eingeben"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Speichert das Passwort im Zustand
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Link zum Registrieren */}
        <div className="register-link">
          <p>Noch kein Konto? <a href="/register">Registrieren</a></p>
        </div>
      </div>

      {/* Fußzeile außerhalb des Containers */}
      <footer className="footer">
        <ul>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/agb">AGB</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Login;
