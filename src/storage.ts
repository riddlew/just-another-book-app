import { Entry } from "@/types";

export function loadAllFromStorage() {
	return [];
}

export function loadListFromStorage(name: string): Entry[] | null {
	const data = localStorage.getItem(name);

	if (data) {
		return JSON.parse(data);
	}

	return null;
}

export function saveListToStorage(name: string, entries: Entry[]) {
	try {
		localStorage.setItem(name, JSON.stringify(entries));
		return true;
	} catch {
		return false;
	}
}