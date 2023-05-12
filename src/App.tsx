import { Header } from '@/components/Header/Header'
import { ListSelector } from '@/components/ListSelector/ListSelector'
import { Search } from '@/components/Search/Search'
import { BookList } from '@/components/BookList/BookList'
import { NewButton } from './components/NewButton/NewButton'
import { Toaster } from 'react-hot-toast'
import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { updateEntryById, updateListIndex } from './slices/entriesSlice'

function App() {
	const dispatch = useAppDispatch();
	const navIndex = useAppSelector(state => state.entries.listIndex);
	const filtered = useAppSelector(state => state.entries.filtered);
	const keybindsActive = useAppSelector(state => state.entries.keybindsActive);
	const entryRefs = useRef<HTMLInputElement[]>([]);

	useEffect(() => {
		if (entryRefs.current && entryRefs.current?.[navIndex]) {
			entryRefs.current?.[navIndex].focus();
		}
	}, [navIndex]);

	function handleKey(event: KeyboardEvent) {
		if (!keybindsActive) return;

		if (
			event.key === 'j' ||
			event.key === 'k' ||
			event.key === 'h' ||
			event.key === 'l'
		) {
			event.preventDefault();
			event.stopPropagation();
		}

		console.log(entryRefs);

		switch(event.key) {
			case 'j': {
				dispatch(updateListIndex(navIndex + 1));
				break;
			}
			case 'k': {
				dispatch(updateListIndex(navIndex - 1));
				break;
			}
			case 'h': {
				dispatch(
					updateEntryById({
						id: filtered[navIndex].id,
						data: {
							chapter: Math.max(filtered[navIndex].chapter - 1, 0),
						}
					})
				)
				break;
			}
			case 'l': {
				dispatch(
					updateEntryById({
						id: filtered[navIndex].id,
						data: {
							chapter: Math.max(filtered[navIndex].chapter + 1, 0),
						}
					})
				)
				break;
			}
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	})

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
					setRefs={(el: HTMLInputElement, i: number) => entryRefs.current[i] = el}
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
