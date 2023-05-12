import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import { ModalFormProps, EntryData } from '@/types';
import { useAppDispatch } from '@/hooks/redux';
import { addEntry } from '@/slices/entriesSlice';
import { useEffect } from 'react';

export const NewEntryForm = ({onSubmit, onCancel}: ModalFormProps) => {
	const dispatch = useAppDispatch();
	const { register, handleSubmit, setFocus, formState: { errors }} = useForm<EntryData>();

	function withSubmit(data: EntryData) {
		const { title, url, chapter } = data;
		const artUrl = data.artUrl || 'https://placehold.co/68x98?text=Cover%20Art';

		console.log(data, artUrl);
		const list = document.getElementById('list_selector') as HTMLSelectElement;
		if (list) {
			dispatch(addEntry({
				listName: list.value,
				data: {
					title,
					url,
					artUrl,
					chapter,
					lastRead: 0,
				},
			}))

			onSubmit && onSubmit();
		}
	}

	useEffect(() => {
		// Focus after it's done rendering
		setTimeout(() => {
			setFocus('title');
		})
	}, [setFocus])

	return (
		<form onSubmit={handleSubmit(withSubmit)}>
			<h2>New Entry</h2>
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
				{...register("title", {
					required: true,
				})}
			/>
			{errors.url?.type === 'required' && (
				<p className="errorDescription">
					URL is a required field
				</p>
			)}
			<input
				type="text"
				placeholder="URL"
				className={classnames({
					'error': errors.url
				})}
				{...register("url", {
					required: true,
				})}
			/>
			<input
				type="text"
				placeholder="Art URL"
				{...register("artUrl")}
			/>
			{errors.chapter?.type === 'required' && (
				<p className="errorDescription">
					Chapter is a required field
				</p>
			)}
			{errors.chapter?.type === 'pattern' && (
				<p className="errorDescription">
					Chapter can only contain numbers and period characters
				</p>
			)}
			<input
				type="text"
				placeholder="Chapter"
				className={classnames({
					'error': errors.chapter
				})}
				{...register("chapter", {
					required: true,
					pattern: /^[0-9.]+$/,
				})}
			/>
			<button
				type="submit"
				className="font-bold rounded-md block w-full bg-theme-green-100 text-white py-2.5 px-5 mt-2.5"
			>
				Create
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
