import { useState } from "react";
import { BookEntry } from "./BookEntry"

export const BookList = () => {
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

	const setNewChapter = (id: number, value: number) => {
		setEntries(prev => {
			const idx = prev.findIndex(el => el.id === id);
			const newEntries = prev.slice();
			newEntries[idx].chapter = value;
			return newEntries;
		});
	};

	return (
		<div className="book-list">
			{entries.map(entry => (
				<BookEntry
					key={`book-entry-${entry.id}`}
					id={entry.id}
					title={entry.title}
					chapter={entry.chapter}
					setChapter={setNewChapter}
				/>
			))}
		</div>
	)
}