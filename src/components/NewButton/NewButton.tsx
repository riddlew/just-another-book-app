import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { NewEntryForm } from '@/components/forms/NewEntryForm'
import ReactModal from 'react-modal';
import { selectCurrentList, useAppSelector } from "@/hooks/redux";
import { useModal } from "@/hooks/useModal";

export const NewButton = () => {
	const currentList = useAppSelector(selectCurrentList);
	const {
		modalOpen,
		openModal,
		closeModal
	} = useModal();

	return (
		<>
			<div className="action-buttons">
				<button
					type="button"
					disabled={currentList === ''}
					className="action-buttons__new"
					onClick={openModal}
				>
					<FontAwesomeIcon icon={faPlus} size="lg" />
					New
				</button>
			</div>
			<ReactModal
				isOpen={modalOpen}
				closeTimeoutMS={250}
				contentLabel="New Entry Modal"
				overlayClassName="modal-backdrop"
				className="modal"
				onRequestClose={closeModal}
				appElement={document.getElementById('modal-root') || undefined}
			>
					<NewEntryForm
						onSubmit={closeModal}
						onCancel={closeModal}
					/>
			</ReactModal>
		</>
	)
}