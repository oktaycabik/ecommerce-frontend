import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <header className="header">
    <div className="container">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className="main-menu">
        <ul>
          <li><a href="#">Anasayfa</a></li>
          <li><a href="#">Ürünler</a></li>
          <li><a href="#">Kampanyalar</a></li>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Ürün ara..." />
          <button>Ara</button>
        </div>
        <div className="user-panel">
          <a href="#">Giriş Yap</a>
          <a href="#">Sepet</a>
        </div>
      </div>
    </div>
  </header>
  );
}

export default App;