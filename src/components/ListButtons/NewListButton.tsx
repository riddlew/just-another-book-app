import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NewListForm } from "@/components/forms/NewListForm";
import ReactModal from "react-modal";

export const NewListButton = () => {
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
				className="btn-circle btn-circle--green"
				onClick={openModal}
			>
				<FontAwesomeIcon icon={faPlus} size="lg" />
			</button>
			<ReactModal
				isOpen={modalOpen}
				closeTimeoutMS={250}
				contentLabel="New List Modal"
				overlayClassName="modal-backdrop"
				className="modal"
				onRequestClose={closeModal}
				appElement={document.getElementById('modal-root') || undefined}
			>
				<NewListForm
					onSubmit={() => setModalOpen(false)}
					onCancel={() => setModalOpen(false)}
				/>
			</ReactModal>
		</>
	);
}