import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DeleteListConfirmationForm } from "@/components/forms/DeleteListConfirmationForm";
import ReactModal from "react-modal";

export const DeleteListButton = () => {
	const [modalOpen, setModalOpen] = useState(false);

	function openModal() {
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<>
			<button
				type="button"
				className="rounded-full bg-theme-red-100 text-white h-12 w-12 inline-flex justify-center items-center"
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