import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks";
import { Modal } from '@/components/common/Modal'


export const NewButton = () => {
	const [modalOpen, setModalOpen] = useState(false);

	function createNewModal() {
		setModalOpen(true);
	}

	const createEntry = () => {
		setModalOpen(false);
	};

	return (
		<>
			{modalOpen &&
				<Modal
					onClose={() => setModalOpen(false)}
					onSubmit={() => console.log('submit')}
				>
					<h2>New Entry</h2>
					<input type="text" placeholder="Title" />
					<input type="text" placeholder="URL" />
					<input type="text" placeholder="Art URL" />
					<input type="text" placeholder="Chapter" />
					<button
						type="button"
						className="font-bold rounded-md block w-full bg-theme-green-100 text-white py-2.5 px-5 mt-2.5"
						onClick={createEntry}
					>
						Create
					</button>
					<button
						type="button"
						className="font-bold rounded-md block w-full bg-theme-red-100 text-white py-2.5 px-5 mt-2.5"
						// onClick={destroyModal}
						onClick={() => setModalOpen(false)}
					>
						Cancel
					</button>
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