import './CartWidget.css'

const CartWidget = () => {
  
    const imgCarrito = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-jaune.png"
    return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        <strong className='fontColorWhite'>10</strong>
    </div>
  )
}

export default CartWidget