import { exportStorage } from "@/storage";
import { ModalFormProps } from "@/types";
import { useEffect, useRef } from "react";

export const ExportModal = ({onSubmit, onCancel}: ModalFormProps) => {
	const exportBtnRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		if (exportBtnRef.current) {
			const data = exportStorage();
			const file = new Blob([JSON.stringify(data)], {type: 'application/json'})
			const url = URL.createObjectURL(file);
			exportBtnRef.current.href = url;
			exportBtnRef.current.download = 'books';
		}
	}, []);

	return (
		<>
			<div style={{
				overflowY: 'auto',
				height: 'calc(100% - 3.2rem)'
			}}>
				<h2>Export</h2>
			</div>
			<a
				ref={exportBtnRef}
				title="Export and download your data"
				className="font-bold text-center rounded-md block w-full bg-theme-purple-300 text-white py-2.5 px-5 mt-2.5"
				onClick={onSubmit}
			>
				Download
			</a>
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
