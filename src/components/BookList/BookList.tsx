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

	function handleKey(event: KeyboardEvent) {
		if (
			event.key === 'j' ||
			event.key === 'k' ||
			event.key === 'h' ||
			event.key === 'l'
		) {
			event.preventDefault();
			event.stopPropagation();
		}

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
					onKeyDown={handleKey}
				/>
			))}
			{filtered.length === 0 && lists.length > 0 && (
				<p className="text-center">Your list is empty!</p>
			)}
		</div>
	)
}