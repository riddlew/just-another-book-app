import { Header } from '@/components/Header/Header'
import { ListSelector } from '@/components/ListSelector/ListSelector'
import { Search } from '@/components/Search/Search'
import { BookList } from '@/components/BookList/BookList'
import { NewButton } from './components/NewButton/NewButton'

function App() {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="my-16">
					<ListSelector />
					<Search />
				</div>

				<NewButton />
				<BookList />
			</div>
		</>
	)
}

export default App
