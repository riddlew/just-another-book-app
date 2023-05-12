import { useRef, useState } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { importDataAsync } from "@/slices/entriesSlice";
import { ImportDragDropProps } from "@/types";

export const ImportDragDrop = ({onImport}: ImportDragDropProps) => {
	const dispatch = useAppDispatch();
	const [dragActive, setDragActive] = useState(false);
	const [validFileType, setValidFileType] = useState(true);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFileData = (file: File) => {
		if (file.type !== 'application/json') {
			setValidFileType(false);
		} else {
			setValidFileType(true);
			file.text().then(res => {
				dispatch(importDataAsync(res));
				onImport && onImport();
			})
		}
	}

	const handleDrag = (event: React.DragEvent) => {
		event.preventDefault();
		event.stopPropagation();
		if (event.type === 'dragenter' || event.type === 'dragover') {
			setDragActive(true);
		} else {
			setDragActive(false);
		}
	}

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setDragActive(false);
		if (event.dataTransfer.files && event.dataTransfer.files[0]) {
			handleFileData(event.dataTransfer.files[0]);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (event.target.files && event.target.files[0]) {
			handleFileData(event.target.files[0]);
		}
	}

	const onClick = () => {
		inputRef.current?.click();
	}

	return (
		<>
			{!validFileType && (
				<p className="text-center mb-2.5 font-semibold text-theme-red-100">
					Incorrect file type: file must be a .json file
				</p>
			)}
			<form
				id="file-upload"
				onDragEnter={handleDrag}
				onSubmit={(event) => event.preventDefault()}
			>
				<input
					ref={inputRef}
					type="file"
					accept="application/json"
					id="file-upload-input"
					multiple={false}
					onChange={handleChange}
				/>
				<label
					id="file-upload-label"
					htmlFor="file-upload-input"
					className={dragActive ? 'drag-active' : ''}
				>
					<div>
						<p>Drag and drop your file here or</p>
						<button
							className="file-upload-btn"
							onClick={onClick}
						>click here to upload a file</button>
					</div>
				</label>
				{dragActive && (
					<div
						id="drag-file-element"
						onDragEnter={handleDrag}
						onDragLeave={handleDrag}
						onDragOver={handleDrag}
						onDrop={handleDrop}
					></div>
				)}
			</form>
		</>
	);
}