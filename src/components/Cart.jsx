import { useContext } from 'react'
import CartContex from '../store/CartContext.jsx'
import Button from './UI/Button.jsx'
import { currencyFormatter } from '../util/formatting.js'

export default function Cart() {
	const cartCtx = useContext(CartContex)
	const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
	return (
		<Modal className='cart'>
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
				<Button textOnly>Close</Button>
				<Button>Go to checkout</Button>
			</p>
		</Modal>
	)
}
