import { useEffect, useRef } from "react";
import { BookEntry } from "./BookEntry"
import { useAppDispatch, useAppSelector } from '@/hooks'
import { updateEntryById, updateListIndex } from "@/slices/entriesSlice";

export const BookList = () => {
	const dispatch = useAppDispatch();
  const lists = useAppSelector(state => state.entries.lists);
	const filtered = useAppSelector(state => state.entries.filtered);
	const navIndex = useAppSelector(state => state.entries.listIndex);
	const entryRefs = useRef<HTMLInputElement[]>([]);

	useEffect(() => {
		if (entryRefs.current && entryRefs.current?.[navIndex]) {
			entryRefs.current?.[navIndex].focus();
		}
	}, [navIndex]);

	useEffect(() => {
		function handleKey(event: KeyboardEvent) {
			if (
				event.key === 'ArrowDown' ||
				event.key === 'ArrowUp' ||
				event.key === 'ArrowLeft' ||
				event.key === 'ArrowRight'
			) {
				event.preventDefault();
				event.stopPropagation();
			}

			switch(event.key) {
				case 'ArrowDown': {
					dispatch(updateListIndex(navIndex + 1));
					break;
				}
				case 'ArrowUp': {
					dispatch(updateListIndex(navIndex - 1));
					break;
				}
				case 'ArrowLeft': {
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
				case 'ArrowRight': {
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
		document.addEventListener('keydown', handleKey);
		return () => {
			document.removeEventListener('keydown', handleKey);
		}
	}, [dispatch, navIndex, filtered])

	return (
		<div className="book-list">
			{filtered.map((entry, i) => (
				<BookEntry
					key={entry.id}
					refCB={el => entryRefs.current[i] = el}
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