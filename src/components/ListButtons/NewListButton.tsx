import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NewListForm } from "@/components/forms/NewListForm";
import ReactModal from "react-modal";
import { useModal } from "@/hooks/useModal";

export const NewListButton = () => {
	const {
		modalOpen,
		openModal,
		closeModal
	} = useModal();

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
					onSubmit={closeModal}
					onCancel={closeModal}
				/>
			</ReactModal>
		</>
	);
}