import { useEffect, useState } from 'react'

export default function Meals() {
	const [loadedMeals, setLoadedMeals] = useState([])

	useEffect(() => {
		async function fetchMeals() {
			try {
				const res = await fetch('http://localhost:3000/meals')
				const meals = await res.json()
				setLoadedMeals(meals)
				if (!response.ok) {
				}
			} catch (err) {}
		}

		fetchMeals()
	}, [])

	return (
		<ul id='meals'>
			{loadedMeals.map(meal => (
				<li key={meal.id}>{meal.name}</li>
			))}
		</ul>
	)
}
