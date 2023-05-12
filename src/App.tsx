import { Header } from '@/components/Header/Header'
import { ListSelector } from '@/components/ListSelector/ListSelector'
import { Search } from '@/components/Search/Search'
import { BookList } from '@/components/BookList/BookList'
import { NewButton } from './components/NewButton/NewButton'
import { Toaster } from 'react-hot-toast'
import { useKeybindHandler } from './hooks/useKeybindHandler'

function App() {
	const {setRefs} = useKeybindHandler();

	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="my-16">
					<ListSelector />
					<Search />
				</div>

				<NewButton />
				<BookList
					setRefs={setRefs}
				/>
				<Toaster 
					position="bottom-center"
					toastOptions={{
						duration: 5000,
						style: {
							padding: '1rem 2rem',
							backgroundColor: '#333333',
							color: '#ffffff',
						},
						success: {
							style: {
								color: '#daffc0',
								backgroundColor: '#419d00',
							},
							iconTheme: {
								primary: '#daffc0',
								secondary: '#419d00',
							},
						},
						error: {
							style: {
								color: '#ffdcea',
								backgroundColor: '#9d003c',
							},
							iconTheme: {
								primary: '#ffdcea',
								secondary: '#9d003c',
							},
						},
					}}
				/>
			</div>
		</>
	)
}

export default App
