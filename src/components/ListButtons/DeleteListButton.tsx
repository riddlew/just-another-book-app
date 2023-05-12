import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DeleteListConfirmationForm } from "@/components/forms/DeleteListConfirmationForm";
import ReactModal from "react-modal";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setKeybindsActive } from "@/slices/entriesSlice";

export const DeleteListButton = () => {
	const dispatch = useAppDispatch();
	const currentList = useAppSelector(state => state.entries.currentList);
	const [modalOpen, setModalOpen] = useState(false);

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
				className="btn-circle btn-circle--red"
				onClick={openModal}
			>
				<FontAwesomeIcon icon={faMinus} size="lg" />
			</button>
			<ReactModal
				isOpen={modalOpen}
				closeTimeoutMS={250}
				contentLabel="Delete List Confirmation Modal"
				overlayClassName="modal-backdrop"
				className="modal"
				onRequestClose={closeModal}
				appElement={document.getElementById('modal-root') || undefined}
				style={{ content: { width: '20rem' }}}
			>
				<DeleteListConfirmationForm
					onSubmit={closeModal}
					onCancel={closeModal}
				/>
			</ReactModal>
		</>
	);
}