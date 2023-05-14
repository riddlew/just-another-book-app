import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import { ListEditDeleteProps, ModalFormProps } from '@/types';
import { useAppDispatch } from '@/hooks/redux';
import { editList } from '@/slices/entriesSlice';
import { useEffect } from 'react';

export const EditListForm = ({onSubmit, onCancel, currentTitle}: ModalFormProps & { currentTitle: string }) => {
	const dispatch = useAppDispatch();
	const { register, handleSubmit, setFocus, formState: { errors }} = useForm<ListEditDeleteProps>();

	function withSubmit({title}: ListEditDeleteProps) {
		const list = document.getElementById('list_selector') as HTMLSelectElement;
		dispatch(editList({
			name: title,
			slug: list.value,
		}))
		onSubmit && onSubmit();
	}

	useEffect(() => {
		// Focus after it's done rendering
		setTimeout(() => {
			setFocus('title');
		})
	}, [setFocus])

	return (
		<form onSubmit={handleSubmit(withSubmit)} autoComplete="off">
			<h2>Edit List</h2>
			{errors.title?.type === 'required' && (
				<p className="errorDescription">
					Name is a required field
				</p>
			)}
			<input
				type="text"
				placeholder="Title"
				className={classnames({
					'error': errors.title
				})}
				defaultValue={currentTitle}
				{...register("title", {
					required: true,
				})}
			/>
			<button
				type="submit"
				className="font-bold rounded-md block w-full bg-theme-green-100 text-white py-2.5 px-5 mt-2.5"
			>
				Save
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
