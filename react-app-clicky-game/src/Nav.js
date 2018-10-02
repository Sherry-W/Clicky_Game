import React from "react";

const styles = {
  navbarStyle: {
    background: "black",
    width: '100%',
    color: 'white',
    justifyContent: "flex-end"
  }
};


const Nav = () => (
  <nav style={styles.navbarStyle} className="navbar">
    <p>Welcome</p>
  </nav>
);

export default Nav;
