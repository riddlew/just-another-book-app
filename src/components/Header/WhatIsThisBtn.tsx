import { useState } from "react";
import ReactModal from "react-modal";
import { WhatIsThisModal } from "../modals/WhatIsThisModal";
import { setKeybindsActive } from "@/slices/entriesSlice";
import { useAppDispatch } from "@/hooks";

export const WhatIsThisBtn = () => {
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