import React from "react"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <header>
        <h3 style={{ display:'flex', justifyContent:'center',}}> Dislex.shop </h3>
         <nav style={{ display:'flex', justifyContent:'center'}}>
            <button>Opcion 1</button>
            <button>Opcion 2</button>
            <button>Opcion 3</button>
            <CartWidget/>
         </nav>
         
        </header>
    )
}

export default NavBar