import React from "react"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <header>
        <h1 style={{ display:'flex', justifyContent:'space-between',}}> Dislex.shop </h1>
         <nav>
            <button to="/categoty/opcion 1">Opcion 1</button>
            <button to="/categoty/opcion 2">Opcion 2</button>
            <button to="/categoty/opcion 3">Opcion 3</button>
        </nav>
            <CartWidget/>
         
         
        </header>
    )
}

export default NavBar