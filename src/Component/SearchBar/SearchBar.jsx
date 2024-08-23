import axios from 'axios';
import React, { useState,useEffect } from 'react';
//import { useContext } from 'react';
//import ThemeContext from '../ThemeContext';

function SearchBar({ setUser }) { 
    const [searchTerm, setSearchTerm] = useState("octocat");
    //const {theme} = useContext(ThemeContext)

    const handleSearch = async (username) => {
        const userToSearch = username || searchTerm;
        if (userToSearch) {
            try {
                const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
                setUser(response.data);
            } catch (err) {
                console.error("err");
                alert('user does not exist')
                setUser(octocat); 
            }
        }
    };
    useEffect(() => {
        handleSearch("octocat");
      }, []);

    return (
        <div className='search-bar'>
            <div className='inner-left-search'>
                <div>
                    <img src="../assets/images/icon-search.svg" alt="Search Icon" />
                </div>
                <div className='inner-right-search'>
                    <input 
                        type="text" 
                        placeholder='Search Github username...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
