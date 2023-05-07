import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { EntriesSliceState, EntriesSliceUpdateData, NewEntry } from '@/types';
import { loadAllFromStorage, loadListFromStorage, saveListToStorage } from '@/storage';
import {v4 as uuidv4} from 'uuid'

const initialState: EntriesSliceState = {
	list: [],
	filtered: [],
	keywords: '',
};

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
			let uuid = uuidv4();
			while (state.list.find(entry => entry.id === uuid)) {
				uuid = uuidv4();
			}
			const newItem = {
				id: uuid,
				...action.payload.data
			};
			state.list.push(newItem);
			saveListToStorage(action.payload.listName, state.list);
			entriesSlice.caseReducers.filterEntries(state, {
				type: 'filterEntries',
				payload: state.keywords
			});
		},
		loadList: (state, action: PayloadAction<string>) => {
			const data = loadListFromStorage(action.payload);

			if (data) {
				state.list = state.filtered = data;
			} else {
				state.list = state.filtered = [];
			}
		},
		// removeBookById: (state, payload) => {

		// },
		// setList: (state, payload) => {

		// },
		setKeywords: (state, action: PayloadAction<string>) => {
			state.keywords = action.payload;
		},
		clearKeywords: (state) => {
			state.keywords = '';
		}
	},
});

export const {
	updateEntryById,
	filterEntries,
	addEntry,
	loadList,
	setKeywords,
	clearKeywords,
} = entriesSlice.actions;

export const selectEntriesList = (state: RootState) => state.entries.list.values;

export default entriesSlice.reducer;