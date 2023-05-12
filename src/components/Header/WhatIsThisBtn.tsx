import ReactModal from "react-modal";
import { WhatIsThisModal } from "../modals/WhatIsThisModal";
import { useModal } from "@/hooks/useModal";

export const WhatIsThisBtn = () => {
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
				What is this?
			</button>
			<ReactModal
				isOpen={modalOpen}
				closeTimeoutMS={250}
				contentLabel="What Is This? Modal"
				overlayClassName="modal-backdrop"
				className="modal"
				onRequestClose={closeModal}
				appElement={document.getElementById('modal-root') || undefined}
				style={{
					content: {
						width: '80%',
						maxWidth: '50rem',
						height: '80%',
						overflow: 'hidden'
					}
				}}
			>
				<WhatIsThisModal onCancel={closeModal} />
			</ReactModal>
		</>
	);
}