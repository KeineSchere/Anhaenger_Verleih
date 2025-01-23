import React, { useState } from 'react';
import './CSS/register.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Hier kannst du eine API-Anfrage senden oder die Daten weiterverarbeiten
    };

    return (
        <div className="register-container">
            <h1>Registrieren</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Benutzername</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Benutzername"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-Mail-Adresse"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Passwort</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Passwort"
                        required
                    />
                </div>

                <button type="submit" className="register-btn">Registrieren</button>
            </form>

            <div className="login-link">
                <p>Bereits registriert? <a href="/login">Zum Login</a></p>
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
};

export default RegisterPage;
