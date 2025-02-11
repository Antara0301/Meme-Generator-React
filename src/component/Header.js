/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import logo from "../images/troll-face.png"

export default function Header(){
    return(
        <header className="header">
        <img  src={logo} className="header--image" alt="meme logo"
        />
        <h2 className="header--title">Meme Generator</h2>
      
    </header>
    
    )
}