import { BookEntry } from "./BookEntry"
import { useAppSelector } from '@/hooks'

export const BookList = () => {
	const filtered = useAppSelector(state => state.books.filtered);

	return (
		<div className="book-list">
			{filtered.map(entry => (
				<BookEntry
					key={`book-entry-${entry.id}`}
					id={entry.id}
					title={entry.title}
					artUrl={entry.artUrl}
					chapter={entry.chapter}
				/>
			))}
		</div>
	)
}