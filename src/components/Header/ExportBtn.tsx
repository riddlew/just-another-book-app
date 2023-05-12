import { useState } from "react";
import ReactModal from "react-modal";
import { ExportModal } from "@/components/modals/ExportModal";
import { useAppDispatch } from "@/hooks";
import { setKeybindsActive } from "@/slices/entriesSlice";

export const ExportBtn = () => {
	const dispatch = useAppDispatch();
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
		dispatch(setKeybindsActive(false));
	}

	const closeModal = () => {
		setModalOpen(false);
		dispatch(setKeybindsActive(true));
	}

	return (
		<>
			<button
				type="button"
				className="transition-colors block w-full sm:inline-block sm:px-2 py-4 font-bold hover:bg-theme-purple-200"
				onClick={openModal}
			>
				Export
			</button>
			<ReactModal
				isOpen={modalOpen}
				closeTimeoutMS={250}
				contentLabel="Export Lists Modal"
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
				<ExportModal
					// onSubmit={handleExport}
					onCancel={closeModal}
				/>
			</ReactModal>
		</>
	);
}