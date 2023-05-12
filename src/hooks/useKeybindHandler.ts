import { updateEntryById, updateListIndex } from "@/slices/entriesSlice";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

export const useKeybindHandler = () => {
	const dispatch = useAppDispatch();
	const navIndex = useAppSelector(state => state.entries.listIndex);
	const filtered = useAppSelector(state => state.entries.filtered);
	const keybindsActive = useAppSelector(state => state.entries.keybindsActive);
	const entryRefs = useRef<HTMLInputElement[]>([]);

	const setRefs = (el: HTMLInputElement, i: number) => { entryRefs.current[i] = el }

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

	return {entryRefs, setRefs};
}