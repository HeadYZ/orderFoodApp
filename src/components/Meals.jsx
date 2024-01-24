import { useEffect, useState } from 'react'
import MealItem from './MealItem.jsx'

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
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	)
}