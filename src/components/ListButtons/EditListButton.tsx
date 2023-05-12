import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { EditListForm } from "@/components/forms/EditListForm";
import { useAppSelector } from "@/hooks/redux";
import ReactModal from "react-modal";
import { useModal } from "@/hooks/useModal";

export const EditListButton = () => {
	const lists = useAppSelector(state => state.entries.lists);
	const currentList = useAppSelector(state => state.entries.currentList);
	const {
		modalOpen,
		openModal,
		closeModal
	} = useModal();

	function getCurrentListTitle(): string {
		const list = document.getElementById('list_selector') as HTMLSelectElement;
		const data = lists.find(l => l.slug === list.value);
		return data?.name || '';
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