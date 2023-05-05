import { BookEntry } from "./BookEntry"
import { useAppDispatch, useAppSelector } from '@/hooks'
import { updateBookById } from '@/slices/booksSlice'

export const BookList = () => {
	const dispatch = useAppDispatch();
	const filtered = useAppSelector(state => state.books.filtered);

	const setNewChapter = (id: number, value: number) => {
		dispatch(
			updateBookById({
				id,
				data: {
					chapter: value
				}
			})
		);
	};

	return (
		<div className="book-list">
			{filtered.map(entry => (
				<BookEntry
					key={`book-entry-${entry.id}`}
					id={entry.id}
					title={entry.title}
					artUrl={entry.artUrl}
					chapter={entry.chapter}
					setChapter={setNewChapter}
				/>
			))}
		</div>
	)
}