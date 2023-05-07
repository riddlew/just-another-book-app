import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { EntriesSliceState, EntriesSliceUpdateData, Entry } from '@/types';
import { loadStorage, saveStorage } from '@/storage';

type NewEntry = Omit<Entry, 'id'>;

const loadFromStorage = () => {
	const data = loadStorage();
	return {
		list: data,
		filtered: data,
	};
}

const initialState: EntriesSliceState = loadFromStorage();

export const entriesSlice = createSlice({
	name: 'entries',
	initialState,
	reducers: {
		updateEntryById: (state, action: PayloadAction<EntriesSliceUpdateData>) => {
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
		filterEntries: (state, action: PayloadAction<string>) => {
			const keywords = action.payload.trim();
			if (keywords === "")
				state.filtered = state.list;

			const keywordsGlob = keywords.split(' ').join('.*');
			const regex = new RegExp(`${keywordsGlob}`, 'i');
			state.filtered = state.list.filter(entry => regex.test(entry.title));
		},
		addEntry: (state, action: PayloadAction<NewEntry>) => {
			const newItem = {
				id: state.list.length,
				...action.payload
			};
			state.list.push(newItem);
			saveStorage(state.list);
		},
		// removeBookById: (state, payload) => {

		// },
		// setList: (state, payload) => {

		// },
	},
});

export const {
	updateEntryById,
	filterEntries,
	addEntry,
} = entriesSlice.actions;

export const selectEntriesList = (state: RootState) => state.entries.list.values;

export default entriesSlice.reducer;