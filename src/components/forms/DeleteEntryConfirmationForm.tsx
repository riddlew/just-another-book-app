import { ModalFormProps } from '@/types';
import { useAppDispatch } from '@/hooks/redux';
import { removeEntry } from '@/slices/entriesSlice';
import { useEffect, useRef } from 'react';

export const DeleteEntryConfirmationForm = ({onSubmit, onCancel, entryId, entryName}: ModalFormProps & { entryId: string, entryName: string }) => {
	const dispatch = useAppDispatch();
	const deleteBtnRef = useRef<HTMLButtonElement>(null);

	function handleSubmit() {
		dispatch(removeEntry(entryId));
		onSubmit && onSubmit();
	}

	useEffect(() => {
		// Focus after it's done rendering
		setTimeout(() => {
			deleteBtnRef.current?.focus();
		})
	}, [])

	return (
		<form onSubmit={handleSubmit}>
			<h2>Are you sure you want to delete <span className="text-theme-red-100">{entryName}</span>?</h2>
			<button
				type="submit"
				ref={deleteBtnRef}
				className="font-bold rounded-md block w-full bg-theme-red-100 text-white py-2.5 px-5 mt-2.5"
			>
				Delete
			</button>
			<button
				type="button"
				className="font-bold rounded-md block w-full bg-theme-gray-200 text-white py-2.5 px-5 mt-2.5"
				onClick={onCancel}
			>
				Cancel
			</button>
		</form>
	);
}
