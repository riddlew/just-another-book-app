import { BookEntry } from "./BookEntry"
import { useAppSelector } from '@/hooks'

export const BookList = () => {
	const filtered = useAppSelector(state => state.entries.filtered);

	return (
		<div className="book-list">
			{filtered.map(entry => (
				<BookEntry
					key={`book-entry-${entry.id}`}
					id={entry.id}
					title={entry.title}
					url={entry.url}
					artUrl={entry.artUrl}
					chapter={entry.chapter}
					lastRead={entry.lastRead}
				/>
			))}
			{filtered.length === 0 && (
				<p className="text-center">Your list is empty!</p>
			)}
		</div>
	)
}