import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { EditListForm } from "@/components/forms/EditListForm";
import { useAppDispatch, useAppSelector } from "@/hooks";
import ReactModal from "react-modal";
import { setKeybindsActive } from "@/slices/entriesSlice";

export const EditListButton = () => {
	const dispatch = useAppDispatch();
	const lists = useAppSelector(state => state.entries.lists);
	const currentList = useAppSelector(state => state.entries.currentList);
	const [modalOpen, setModalOpen] = useState(false);

	function getCurrentListTitle(): string {
		const list = document.getElementById('list_selector') as HTMLSelectElement;
		const data = lists.find(l => l.slug === list.value);
		return data?.name || '';
	}

	function openModal() {
		setModalOpen(true);
		dispatch(setKeybindsActive(false));
	}

	function closeModal() {
		setModalOpen(false);
		dispatch(setKeybindsActive(true));
	}

	return (
		<>
			<button
			type="button"
			disabled={currentList === ''}
			className="btn-circle"
			onClick={openModal}
			>
			<FontAwesomeIcon icon={faPencil} />
			</button>
			<ReactModal
				isOpen={modalOpen}
				closeTimeoutMS={250}
				contentLabel="Edit List Modal"
				overlayClassName="modal-backdrop"
				className="modal"
				onRequestClose={closeModal}
				appElement={document.getElementById('modal-root') || undefined}
				style={{ content: { width: '20rem' }}}
			>
				<EditListForm
					onSubmit={closeModal}
					onCancel={closeModal}
					currentTitle={getCurrentListTitle()}
				/>
			</ReactModal>
		</>
	);
}