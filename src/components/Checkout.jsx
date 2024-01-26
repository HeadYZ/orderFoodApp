import { useContext } from 'react'
import Modal from './UI/Modal.jsx'
import CartContext from '../store/CartContext.jsx'
import Input from './UI/Input.jsx'
import { currencyFormatter } from '../util/formatting.js'
import Button from './UI/Button.jsx'
import UserPogressContext from '../store/UserProgressContext.jsx'

export default function Checkout() {
	const cartCtx = useContext(CartContext)
	const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
	const userProgressCtx = useContext(UserPogressContext)

	function handleClose() {
		userProgressCtx.hideCheckout()
	}
	return (
		<Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
			<form>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
				<Input label='Full Name' type='text' id='full-name' />
				<Input label='E-MAIL Address' type='email' id='email' />
				<Input label='Street' type='text' id='street' />
				<div className='control-row'>
					<Input label='Postal Code' type='text' id='postal-code' />
					<Input label='City' type='text' id='city' />
				</div>
				<p className='modal-actions'>
					<Button type='button' textOnly onClick={handleClose}>
						Close
					</Button>
					<Button>Submit Order</Button>
				</p>
			</form>
		</Modal>
	)
}
