import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Modal } from "@/components/common/Modal";
import { EditListForm } from "@/components/forms/EditListForm";
import { useAppSelector } from "@/hooks";

export const EditListButton = () => {
	const lists = useAppSelector(state => state.entries.lists);
	const [editModalOpen, setEditModalOpen] = useState(false);

	function getCurrentListTitle(): string {
		const list = document.getElementById('list_selector') as HTMLSelectElement;
		const data = lists.find(l => l.slug === list.value);
		return data?.name || '';
	}

	return (
		<>
			<button
			type="button"
			className="rounded-full bg-theme-gray-200 text-white h-12 w-12 inline-flex justify-center items-center"
			onClick={() => setEditModalOpen(true)}
			>
			<FontAwesomeIcon icon={faPencil} />
			</button>
			{editModalOpen &&
				<Modal
					width="20rem"
					onClose={() => setEditModalOpen(false)}
				>
					<EditListForm
						onSubmit={() => setEditModalOpen(false)}
						onCancel={() => setEditModalOpen(false)}
						currentTitle={getCurrentListTitle()}
					/>
				</Modal>
			}
		</>
	);
}