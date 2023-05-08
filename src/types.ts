export interface Entry {
	id: string;
	title: string;
	url: string;
	artUrl: string;
	chapter: number;
	lastRead: number;
}

export interface List {
	name: string;
	slug: string;
}

export interface ModalProps {
	children: React.ReactNode;
	width?: string;
	onClose?: () => void;
}

export interface ModalFormProps {
	onSubmit?: () => void;
	onCancel?: () => void;
}

export type NewEntryData = Pick<
	Entry,
	'title' | 'url' | 'chapter'
> & { artUrl: string };

export interface NewEntry {
	listName: string
	data: Omit<Entry, 'id'>,
 }

export interface EntriesSliceState {
	lists: List[];
	list: Entry[];
	currentList: string;
	filtered: Entry[];
	keywords: string;
}

export interface EntriesSliceUpdateData {
	id: string;
	data: Partial<Entry>;
}