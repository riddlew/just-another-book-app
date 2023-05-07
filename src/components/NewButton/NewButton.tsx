import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { Modal } from '@/components/common/Modal'
import { NewEntryForm } from './NewEntryForm'

export const NewButton = () => {
	const [modalOpen, setModalOpen] = useState(false);

	function createNewModal() {
		setModalOpen(true);
	}

	return (
		<>
			{modalOpen &&
				<Modal
					width="20rem"
					onClose={() => setModalOpen(false)}
				>
					<NewEntryForm
						onSubmit={() => setModalOpen(false)}
						onCancel={() => setModalOpen(false)}
					/>
				</Modal>
			}
			<div className="action-buttons">
				<button
					type="button"
					className="action-buttons__new"
					onClick={createNewModal}
				>
					<FontAwesomeIcon icon={faPlus} size="lg" />
					New
				</button>
			</div>
		</>
	)
}