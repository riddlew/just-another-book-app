import { ModalFormProps } from "@/types";
import { ImportDragDrop } from "../Header/ImportDragDrop";

export const ImportModal = ({onSubmit, onCancel}: ModalFormProps) => {
	return (
		<>
			<div style={{
				overflowY: 'auto',
				height: 'calc(100% - 3.2rem)'
			}}>
				<h2>Import</h2>
				<ImportDragDrop onImport={onSubmit} />
			</div>
			<button
				type="button"
				className="font-bold rounded-md block w-full bg-theme-gray-200 text-white py-2.5 px-5 mt-2.5"
				onClick={onCancel}
			>
				Close
			</button>
		</>
	);
}
