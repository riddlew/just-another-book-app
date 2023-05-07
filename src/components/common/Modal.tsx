import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
	children: React.ReactNode;
	onClose?: () => void;
	onSubmit?: () => void;
}

export const Modal = ({children, onClose, onSubmit}: ModalProps) => {
	// const dispatch = useAppDispatch();
	const root = document.getElementById('modal-root');
	const modal = document.createElement('div');
	modal.className = 'modal modal--new-entry';
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