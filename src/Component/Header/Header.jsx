import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);
  
  
  return (
    <div className='header'>
      <h2>devfinder</h2>
      <div className='color' style={{display: "flex", gap: '2em'}}>
        <span>{theme === "light" ? "DARK" : "LIGHT"}</span>
    <img 
      onClick={changeTheme}
        src={theme === "light" ? "../assets/images/icon-moon.svg" : "../assets/images/icon-sun.svg"} 
        alt="Theme Toggle Icon" 
      />
      </div>
    </div>
  );
}

export default Header;
