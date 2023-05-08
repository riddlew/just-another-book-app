import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Modal } from "@/components/common/Modal";
import { NewListForm } from "@/components/forms/NewListForm";

export const NewListButton = () => {
	const [newModalOpen, setNewModalOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				className="rounded-full bg-theme-green-100 text-white h-12 w-12 inline-flex justify-center items-center"
				onClick={() => setNewModalOpen(true)}
			>
				<FontAwesomeIcon icon={faPlus} size="lg" />
			</button>
			{newModalOpen &&
				<Modal
					width="20rem"
					onClose={() => setNewModalOpen(false)}
				>
					<NewListForm
						onSubmit={() => setNewModalOpen(false)}
						onCancel={() => setNewModalOpen(false)}
					/>
				</Modal>
			}
		</>
	);
}