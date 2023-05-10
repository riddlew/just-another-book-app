import { AddListToStorageOpts, Entry, List } from "@/types";

export function loadAllFromStorage() {
	return [];
}

export function getListsFromStorage(): List[] {
	const data = localStorage.getItem('keys');
	if (data) {
		return JSON.parse(data);
	}

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

export function deleteListFromStorage(name: string) {
	const listsStr = localStorage.getItem('keys');
	if (!listsStr) return false;

	const lists: List[] = JSON.parse(listsStr);
	const keyIdx = lists.findIndex(l => l.slug === name);
	if (keyIdx > -1) {
		localStorage.removeItem(lists[keyIdx].slug);
		lists.splice(keyIdx, 1);
		localStorage.setItem('currentList', '');
		localStorage.setItem('keys', JSON.stringify(lists));
		return true;
	}

	return false;
}

export function addListToStorage(name: string, slug: string, opts?: AddListToStorageOpts) {
	const listsStr = localStorage.getItem('keys');
	const lists: List[] = JSON.parse(listsStr || '[]');

	if (opts && opts.index) {
		lists.splice(opts.index, 0, {name, slug})
	} else {
		lists.push({ name, slug});
	}
	localStorage.setItem('keys', JSON.stringify(lists));

	if (opts && opts.data)
		localStorage.setItem(slug, JSON.stringify(opts.data));
	else
		localStorage.setItem(slug, JSON.stringify([]));

	return true;
}

export function getCurrentListFromStorage() {
	const currentList = localStorage.getItem('currentList');
	return currentList || '';
}

export function saveCurrentListToStorage(slug: string) {
	localStorage.setItem('currentList', slug);
}