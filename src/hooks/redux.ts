import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectList = (state: RootState) => state.entries.list;
export const selectLists = (state: RootState) => state.entries.lists;
export const selectFiltered = (state: RootState) => state.entries.filtered;
export const selectCurrentList = (state: RootState) => state.entries.currentList;
export const selectListIndex = (state: RootState) => state.entries.listIndex;
export const selectKeywords = (state: RootState) => state.entries.keywords;
export const selectKeybindsActive = (state: RootState) => state.entries.keybindsActive;