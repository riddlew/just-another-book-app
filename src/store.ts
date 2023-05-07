import { configureStore} from '@reduxjs/toolkit'
import entriesReducer from '@/slices/entriesSlice'
import searchReducer from '@/slices/searchSlice'

export const store = configureStore({
	reducer: {
		entries: entriesReducer,
		search: searchReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;