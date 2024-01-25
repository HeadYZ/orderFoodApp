import { useContext } from 'react'
import LogoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx'
import CartContext from '../store/CartContext.jsx'
import UserPogressContext from '../store/UserProgressContext.jsx'

export default function Header() {
	const cartCtx = useContext(CartContext)
	const userProgressCtx = useContext(UserPogressContext)

	const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
		return totalNumberOfItems + item.quantity
	}, 0)

	function handleShowCart() {
		userProgressCtx.showCart()
	}
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={LogoImg} alt='A restaurant' />
				<h1>ReactFood</h1>
			</div>
			<nav>
				<Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	)
}
