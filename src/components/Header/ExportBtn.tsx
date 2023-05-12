import ReactModal from "react-modal";
import { ExportModal } from "@/components/modals/ExportModal";
import { useModal } from "@/hooks/useModal";

export const ExportBtn = () => {
	const {
		modalOpen,
		openModal,
		closeModal
	} = useModal();

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
					onCancel={closeModal}
				/>
			</ReactModal>
		</>
	);
}