import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={heading}>My Todo List</h1>
    </header>
  );
}

const headerStyle = {
  background: "black",
  color: "#fff",
  textAlign: "center",
  padding: "40px"
};
const heading = {
  fontFamily: "'Roboto', sans-serif",
  fontWeight: "300",
  fontSize: "3.5rem"
};

export default Header;
