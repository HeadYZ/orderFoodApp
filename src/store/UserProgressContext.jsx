import { createContext, useState } from 'react'

const UserPogressContext = createContext({
	progress: '',
	showCart: () => {},
	hideCart: () => {},
	showCheckout: () => {},
	hideCheckout: () => {},
})

export function UserProgressContextProvider({ children }) {
	const [userProgress, setUserProgress] = useState('')

	function showCart() {
		setUserProgress('cart')
	}
	function hideCart() {
		setUserProgress('')
	}
	function showCheckout() {
		setUserProgress('checkout')
	}
	function hideCheckout() {
		setUserProgress('')
	}

	const userProgressCtx = {
		progress: userProgress,
		showCart,
		hideCart,
		showCheckout,
		hideCheckout,
	}

	return <UserPogressContext.Provider value={userProgressCtx}>{children}</UserPogressContext.Provider>
}

export default UserPogressContext
