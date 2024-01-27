import useHttp from '../hooks/useHttp.jsx'
import MealItem from './MealItem.jsx'
import Error from './UI/Error.jsx'

const requestConfig = {}

export default function Meals() {
	const { data: loadedMeals, isLoading, error } = useHttp('htstp://localhost:3000/meals', requestConfig, [])

	if (isLoading) {
		return <p className='center'>Fetching meals...</p>
	}

	if (error) {
		return <Error title='Failed to fetch meals' message={error}></Error>
	}

	return (
		<ul id='meals'>
			{loadedMeals.map(meal => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	)
}
