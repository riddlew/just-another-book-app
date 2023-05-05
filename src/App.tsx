import { useState } from 'react'
import { Header } from '@/components/Header/Header'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<div className="container mx-auto">
			</div>
		</>
	)
}

export default App
