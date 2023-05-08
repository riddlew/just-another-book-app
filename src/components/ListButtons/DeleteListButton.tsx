import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "@/components/common/Modal";
import { useState } from "react";
import { DeleteListConfirmationForm } from "@/components/forms/DeleteListConfirmationForm";

export const DeleteListButton = () => {
	const [deleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				className="rounded-full bg-theme-red-100 text-white h-12 w-12 inline-flex justify-center items-center"
				onClick={() => setDeleteConfirmModalOpen(true)}
			>
				<FontAwesomeIcon icon={faMinus} size="lg" />
			</button>
			{deleteConfirmModalOpen &&
				<Modal
					width="20rem"
					onClose={() => setDeleteConfirmModalOpen(false)}
				>
					<DeleteListConfirmationForm
						onSubmit={() => setDeleteConfirmModalOpen(false)}
						onCancel={() => setDeleteConfirmModalOpen(false)}
					/>
				</Modal>
			}
		</>
	);
}