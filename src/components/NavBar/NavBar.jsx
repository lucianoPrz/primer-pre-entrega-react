import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1 className='fontColorWhite'>IND F.C.</h1>

        <nav>
            <ul className='fontColorWhite'>
                <li>Camisetas</li>
                <li>Camperas</li>
                <li>Buzos</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar