import { useState } from 'react'
import { Header } from '@/components/Header/Header'
import { ListSelector } from '@/components/ListSelector/ListSelector'
import { Search } from '@/components/Search/Search'
import { BookList } from '@/components/BookList/BookList'

function App() {
	const [entries, setEntries] = useState([
		{
			id: 1,
			title: 'Revenge of the Iron-Blooded Sword Hound',
			chapter: 22,
		},
		{
			id: 2,
			title: 'Inifinite Magician',
			chapter: 3,
		},
		{
			id: 3,
			title: 'I Became a Time Lord',
			chapter: 104,
		},
	]);
	const [filtered, setFiltered] = useState(entries);

	const setNewChapter = (id: number, value: number) => {
		setEntries(prev => {
			const idx = prev.findIndex(el => el.id === id);
			const newEntries = prev.slice();
			newEntries[idx].chapter = value;
			return newEntries;
		});
	};

	const filterBooks = (keywords: string) => {
		const keywordsGlob = keywords.split(' ').join('.*');
		const regex = new RegExp(`${keywordsGlob}`, 'i');
		console.log(regex.toString())
		console.log(regex.test(entries[0].title));
		setFiltered(entries.filter(entry => regex.test(entry.title)));
	}

	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="my-16">
					<ListSelector />
					<Search filter={filterBooks} />
				</div>

				<BookList filtered={filtered} setNewChapter={setNewChapter} />
			</div>
		</>
	)
}

export default App
