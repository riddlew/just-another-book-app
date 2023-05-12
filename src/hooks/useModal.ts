import { useState } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { setKeybindsActive } from "@/slices/entriesSlice";
import { UseModalProps } from "@/types";

export const useModal = ({onModalOpen, onModalClose}: UseModalProps = {}) => {
	const dispatch = useAppDispatch();
	const [modalOpen, setModalOpen] = useState(false);

	function openModal() {
		setModalOpen(true);
		dispatch(setKeybindsActive(false));
		if (onModalOpen) onModalOpen();
	}

	function closeModal() {
		setModalOpen(false);
		dispatch(setKeybindsActive(true));
		if (onModalClose) onModalClose();
	}

	return {
		modalOpen,
		setModalOpen,
		openModal,
		closeModal
	};
};