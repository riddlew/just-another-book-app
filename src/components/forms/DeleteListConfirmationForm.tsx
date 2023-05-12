import { ModalFormProps } from '@/types';
import { useAppDispatch } from '@/hooks/redux';
import { removeList } from '@/slices/entriesSlice';
import { useEffect, useRef } from 'react';

export const DeleteListConfirmationForm = ({onSubmit, onCancel}: ModalFormProps) => {
	const dispatch = useAppDispatch();
	const deleteBtnRef = useRef<HTMLButtonElement>(null);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const list = document.getElementById('list_selector') as HTMLSelectElement;
		dispatch(removeList(list.value));
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
			<h2>Are you sure you want to delete this list?</h2>
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
