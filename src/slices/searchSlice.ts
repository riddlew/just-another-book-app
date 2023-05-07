import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

interface SearchState {
	keywords?: string;
}

const initialState: SearchState = {};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setKeywords: (state, action: PayloadAction<string>) => {
			state.keywords = action.payload;
		},
		clearKeywords: (state) => {
			state.keywords = undefined;
		}
	},
});

export const {
	setKeywords,
	clearKeywords,
} = searchSlice.actions;

export const selectKeywords = (state: RootState) => state.search.keywords;

export default searchSlice.reducer;