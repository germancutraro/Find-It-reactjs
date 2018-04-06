import React from 'react';
import './Search.css'


const Search = props => {
  return(
    <div>
      <input type="text" placeholder="Type your band..." autoFocus={false} onChange={props.searchChange} />
    </div>
  );
};

export default Search;