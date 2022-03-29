import React from 'react'
import './Searchbar.css'

function SearchBar() {
  return (
    <div>
        <div className="Card">
            <div className="CardInner">
            <label>Search for your favourite food</label>
            <div className="container">
                <div className="Icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                stroke="#657789" className="feather feather-search">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </div>
                <div className="InputContainer">
                <input placeholder="Search a news..." />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar