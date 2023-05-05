import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

interface Book {
	id: number;
	title: string;
	url: string;
	artUrl: string;
	chapter: number;
	lastRead: number;
}

interface BooksState {
	list: Book[];
	filtered: Book[];
}

interface BookUpdateData {
	id: number;
	data: Partial<Book>;
}

const initialState: BooksState = {
	list: [
		{
			id: 1,
			title: 'Revenge of the Iron-Blooded Sword Hound',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/04/IronBloodSwordHound05-1.png',
			chapter: 22,
			lastRead: Date.now(),
		},
		{
			id: 2,
			title: 'Surviving The Game as a Barbarian',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/04/gameBarbarianCover01.png',
			chapter: 3,
			lastRead: Date.now(),
		},
		{
			id: 3,
			title: 'Superhuman Battlefield',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/02/superhumanCover02.png',
			chapter: 104,
			lastRead: Date.now(),
		},
		{
			id: 4,
			title: 'Boundless Necromancer',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2022/12/boundlessNecroCover01.png',
			chapter: 13,
			lastRead: Date.now(),
		},
		{
			id: 5,
			title: 'Reincarnation of the Strongest Sword God',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2022/08/SwordGodCover01.png',
			chapter: 65,
			lastRead: Date.now(),
		},
		{
			id: 6,
			title: 'Demonic Evolution',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/02/tIEELUSJN.webp-t.w640-vert-copyCUnetauto_scaleLevel3width-1000.jpg',
			chapter: 44,
			lastRead: Date.now(),
		},
	],
	filtered: [
		{
			id: 1,
			title: 'Revenge of the Iron-Blooded Sword Hound',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/04/IronBloodSwordHound05-1.png',
			chapter: 22,
			lastRead: Date.now(),
		},
		{
			id: 2,
			title: 'Surviving The Game as a Barbarian',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/04/gameBarbarianCover01.png',
			chapter: 3,
			lastRead: Date.now(),
		},
		{
			id: 3,
			title: 'Superhuman Battlefield',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/02/superhumanCover02.png',
			chapter: 104,
			lastRead: Date.now(),
		},
		{
			id: 4,
			title: 'Boundless Necromancer',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2022/12/boundlessNecroCover01.png',
			chapter: 13,
			lastRead: Date.now(),
		},
		{
			id: 5,
			title: 'Reincarnation of the Strongest Sword God',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2022/08/SwordGodCover01.png',
			chapter: 65,
			lastRead: Date.now(),
		},
		{
			id: 6,
			title: 'Demonic Evolution',
			url: 'http://www.google.com',
			artUrl: 'https://www.asurascans.com/wp-content/uploads/2023/02/tIEELUSJN.webp-t.w640-vert-copyCUnetauto_scaleLevel3width-1000.jpg',
			chapter: 44,
			lastRead: Date.now(),
		},
	],
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		updateBookById: (state, action: PayloadAction<BookUpdateData>) => {
			const idx = state.list.findIndex(item => item.id === action.payload.id);
			const filteredIdx = state.filtered.findIndex(item => item.id === action.payload.id);

			if(idx >= 0) {
				state.list[idx] = {
					...state.list[idx],
					...action.payload.data
				};
				state.filtered[filteredIdx] = {
					...state.filtered[filteredIdx],
					...action.payload.data
				}
			}
		},
		filterBooks: (state, action: PayloadAction<string>) => {
			const keywords = action.payload.trim();
			if (keywords === "")
				state.filtered = state.list;

			const keywordsGlob = keywords.split(' ').join('.*');
			const regex = new RegExp(`${keywordsGlob}`, 'i');
			state.filtered = state.list.filter(entry => regex.test(entry.title));
		}
		// updateBookByIndex: (state, payload) => {

		// },
		// removeBookById: (state, payload) => {

		// },
		// removeBookByIndex: (state, payload) => {

		// },
		// addBook: (state, payload) => {

		// },
		// setList: (state, payload) => {

		// },
	},
});

export const {
	updateBookById,
	filterBooks,
} = booksSlice.actions;

export const selectBooksList = (state: RootState) => state.books.list.values;

export default booksSlice.reducer;