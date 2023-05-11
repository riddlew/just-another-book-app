import { useState } from "react";
import ReactModal from "react-modal";
import { ImportModal } from "@/components/modals/ImportModal";
import toast from 'react-hot-toast'

export const ImportBtn = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const finishImport = () => {
		closeModal();
		toast.success('Data has been imported');
	}

	return (
		<>
			<button
				type="button"
				className="transition-colors block w-full sm:inline-block sm:px-2 py-4 font-bold hover:bg-theme-purple-200"
				onClick={openModal}
			>
				Import
			</button>
			<ReactModal
				isOpen={modalOpen}
				closeTimeoutMS={250}
				contentLabel="Import Lists Modal"
				overlayClassName="modal-backdrop"
				className="modal"
				onRequestClose={closeModal}
				appElement={document.getElementById('modal-root') || undefined}
				style={{
					content: {
						width: '20rem',
					}
				}}
			>
				<ImportModal
					onSubmit={finishImport}
					onCancel={closeModal}
				/>
			</ReactModal>
		</>
	);
}