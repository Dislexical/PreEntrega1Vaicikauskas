import cart from './assets/carrito.svg'

const CartWidget = () => {
    return(
        <button>
            <img background='white' width='40px' height='40px' src={cart} />       
            0
      </button>
    )
}
export default CartWidget