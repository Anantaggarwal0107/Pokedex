import React, { useState } from "react";

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
//   

  return (
    <div className="search">
        <h1>PokeDex</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button onClick={()=>props.fun(searchTerm)}>Search</button>
    </div>
  );
};

export default Header;
