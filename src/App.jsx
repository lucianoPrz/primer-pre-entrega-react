
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal'
import ItemCount from './components/ItemCount/ItemCount'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'


function App() {
 

  return (
    <>
     <NavBar/>
     <ItemListContainer gretting={"Bienvenido"}/>
    </>
  )
}

export default App
