import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { EditListForm } from "@/components/forms/EditListForm";
import { useAppSelector } from "@/hooks";
import ReactModal from "react-modal";

export const EditListButton = () => {
	const lists = useAppSelector(state => state.entries.lists);
	const [modalOpen, setModalOpen] = useState(false);

	function getCurrentListTitle(): string {
		const list = document.getElementById('list_selector') as HTMLSelectElement;
		const data = lists.find(l => l.slug === list.value);
		return data?.name || '';
	}

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
			className="rounded-full bg-theme-gray-200 text-white h-12 w-12 inline-flex justify-center items-center"
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