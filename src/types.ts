export interface Entry {
	id: number;
	title: string;
	url: string;
	artUrl: string;
	chapter: number;
	lastRead: number;
}

export interface EntryProps extends Entry {
	id: number;
	title: string;
	artUrl: string;
	chapter: number;
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
	list: Entry[];
	filtered: Entry[];
	keywords: string;
}

export interface EntriesSliceUpdateData {
	id: number;
	data: Partial<Entry>;
}