export default function Error({ title, message }) {
	return (
		<div className='error'>
			<h2 className='title'>{title}</h2>
			<p>{message}</p>
		</div>
	)
}
