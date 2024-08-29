import React, { useState } from 'react';
import Header from './Component/Header/Header';
import SearchBar from './Component/SearchBar/SearchBar';
import './App.css';
import { ThemeProvider } from './Component/ThemeContext';

function App() {
  const [user, setUser] = useState(null);

  
  return (
    <ThemeProvider>
    <div className='app-container'>
      <Header />
      <SearchBar setUser={setUser} />
      {user && ( //We are rendering user info only if user data is available
        <div className='container' >
          <div className='main-container'>
          <div className='profile-pic'>
            <img src={user.avatar_url} alt="profile" />
          </div>
          <div className='sub-container'>
            <div className='name-date'>
              <div>
              <span className='name' style={{fontWeight: 'bolder'}}>{user.name || "No Name Available"}</span> <br />
              <span style={{color: 'hsl(221, 74%, 47%)'}}>@{user.login}</span>
              </div>
              <span>Joined {new Date(user.created_at).toLocaleDateString('en-GB',
                {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                }
              )}</span>
            </div>
            </div>
          </div>
          <div className='hey'>
            <div>
          <p style={{marginTop: '2em'}}>{user.bio || "This user has no bio"}</p> 
          
      <div className='user-account-info'>
        
        <span>Repos <br /> <strong>{user.public_repos}</strong> </span>
        <span>Followers <br /> <strong>{user.followers}</strong> </span>
        <span>Following <br /> <strong>{user.following}</strong> </span>
      </div>
      <div className='user-details'>
              <div className='location-twitter'>
                <span><img src="../assets/images/icon-location.svg" alt="icon-location" /> {user.location || "Not Available"}</span>
                <span><img src="../assets/images/icon-twitter.svg" alt="icon-twitter" /> {user.twitter_username ? `@${user.twitter_username}` : "Not Available"}</span>
              </div>
              <div className='website-company'>
                <span><img src="../assets/images/icon-website.svg" alt="icon-website" /> <a href={user.blog || "#"}>{user.blog || "Not Available"}</a></span>
                <span><img src="../assets/images/icon-company.svg" alt="icon-company" /> {user.company || "Not Available"}</span>
              </div>
            </div>
            </div>
            </div>

        </div>
      )}
     
    </div>
    </ThemeProvider>
  );
}

export default App;
