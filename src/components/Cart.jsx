import { useContext } from 'react'
import CartContex from '../store/CartContext.jsx'
import Button from './UI/Button.jsx'
import { currencyFormatter } from '../util/formatting.js'
import Modal from '../components/UI/Modal.jsx'
import UserPogressContext from '../store/UserProgressContext.jsx'

export default function Cart() {
	const cartCtx = useContext(CartContex)
	const userProgressCtx = useContext(UserPogressContext)
	const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

	function handleCloseCart() {
		userProgressCtx.hideCart()
	}
	function handleShowCheckout() {
		userProgressCtx.showCheckout()
	}
	return (
		<Modal className='cart' open={userProgressCtx.progress === 'cart'}>
			<h2>Your Cart</h2>
			<ul>
				{cartCtx.items.map(item => (
					<li key={item.id}>
						{item.name} - {item.quantity}
					</li>
				))}
			</ul>
			<p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
			<p className='modal-actions'>
				<Button textOnly onClick={handleCloseCart}>
					Close
				</Button>
				<Button onClick={handleShowCheckout}>Go to checkout</Button>
			</p>
		</Modal>
	)
}
