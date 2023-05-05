import { useState } from 'react'
import { Header } from '@/components/Header/Header'
import { ListSelector } from '@/components/ListSelector/ListSelector'
import { Search } from '@/components/Search/Search'
import { BookList } from '@/components/BookList/BookList'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="my-16">
					<ListSelector />
					<Search />
				</div>

				<BookList />
			</div>
		</>
	)
}

export default App
