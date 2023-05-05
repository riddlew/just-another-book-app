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
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/04/IronBloodSwordHound05-1.png',
			chapter: 22,
		},
		{
			id: 2,
			title: 'Surviving The Game as a Barbarian',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/04/gameBarbarianCover01.png',
			chapter: 3,
		},
		{
			id: 3,
			title: 'Superhuman Battlefield',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/02/superhumanCover02.png',
			chapter: 104,
		},
		{
			id: 4,
			title: 'Boundless Necromancer',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2022/12/boundlessNecroCover01.png',
			chapter: 13,
		},
		{
			id: 5,
			title: 'Reincarnation of the Strongest Sword God',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2022/08/SwordGodCover01.png',
			chapter: 65,
		},
		{
			id: 6,
			title: 'Demonic Evolution',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/02/tIEELUSJN.webp-t.w640-vert-copyCUnetauto_scaleLevel3width-1000.jpg',
			chapter: 45,
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
