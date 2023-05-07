import { ModalProps } from "@/types";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export const Modal = ({children, width, onClose}: ModalProps) => {
	const root = document.getElementById('modal-root');
	const modal = document.createElement('div');
	modal.className = 'modal';
	modal.style.width = width || 'auto';
	modal.addEventListener('click', (event) => event.stopPropagation());

	const destroyModal = useCallback(() => {
		if (root) {
			root.style.display = 'none';
			root.removeEventListener('click', destroyModal);
			onClose && onClose();
		}
	}, [onClose, root]);

	useEffect(() => {
		if (root) {
			root.appendChild(modal);
			root.style.display = 'flex';
			root.addEventListener('click', destroyModal);
		}
		return () => {
			if (root) {
				root.removeChild(modal);
				root.style.display = 'none';
				root.removeEventListener('click', destroyModal);
			}
		}
	}, [root, modal, destroyModal])

	return createPortal(children, modal);
}