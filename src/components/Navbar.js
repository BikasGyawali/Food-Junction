import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="header">
        <h2 className="title">FOOD JUNCTION</h2>
        <nav className="navbar">
            <a className="link" href="#home">HOME</a>
            <a className="link" href="#aboutt" >ABOUT</a>
            <a className="link" href="#menu">MENU</a>
            <a className="link" href="#order">ORDER</a>  
        </nav>   
    </div> 
    </>
  )
}

export default Navbar;
