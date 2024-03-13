import Navbar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/itemListContainer/itemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
  return(
    <>
    <BrowserRouter>
      < Navbar />     
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"bienvenidos"}/>}  />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting={"productos de la categoria seleccionada:"}/>}  />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter> 
    </>
  )    
}

export default App
