import { BookEntry } from "./BookEntry"
import { useAppSelector } from '@/hooks'

export const BookList = ({setRefs}: {
	setRefs: (el: HTMLInputElement, i: number) => void
}) => {
  const lists = useAppSelector(state => state.entries.lists);
	const filtered = useAppSelector(state => state.entries.filtered);

	return (
		<div className="book-list">
			{filtered.map((entry, i) => (
				<BookEntry
					key={entry.id}
					refCB={el => setRefs(el, i)}
					index={i}
					id={entry.id}
					title={entry.title}
					url={entry.url}
					artUrl={entry.artUrl}
					chapter={entry.chapter}
					lastRead={entry.lastRead}
				/>
			))}
			{filtered.length === 0 && lists.length > 0 && (
				<p className="text-center">Your list is empty!</p>
			)}
		</div>
	)
}