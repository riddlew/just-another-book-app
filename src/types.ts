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
	entry?: Partial<EntryData>
}

export interface ListEditDeleteProps {
	title: string;
}

export type EntryData = Pick<
	Entry,
	'title' | 'url' | 'chapter' | 'artUrl' | 'lastRead'
>

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
	listIndex: number;
	keybindsActive: boolean;
}

export interface EntriesSliceUpdateData {
	id: string;
	data: Partial<Entry>;
}

export interface AddListToStorageOpts {
	index?: number;
	data?: Entry[];
}

export interface ImportDragDropProps {
	onImport?: () => void;
}

export interface UseModalProps {
	onModalOpen?: () => void;
	onModalClose?: () => void;
}