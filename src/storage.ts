import { Entry } from "@/types";

export function loadStorage(): Entry[] {
	const data = localStorage.getItem('entries');

	if (data) {
		return JSON.parse(data);
	}

	return [];
}

export function saveStorage(entries: Entry[]) {
	localStorage.setItem('entries', JSON.stringify(entries));
}