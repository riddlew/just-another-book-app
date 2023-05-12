import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import classnames from "classnames";
import { useAppDispatch } from '@/hooks'
import { updateEntryById, updateListIndex } from '@/slices/entriesSlice'
import { Entry } from "@/types";
import { DeleteEntryConfirmationForm } from "@/components/forms/DeleteEntryConfirmationForm";
import { motion } from 'framer-motion'
import ReactModal from "react-modal";
import { formatDistance } from "date-fns"
import { EditEntryForm } from "../forms/EditEntryForm";

export const BookEntry = ({
	id,
	title,
	url,
	artUrl,
	chapter,
	lastRead,
	refCB,
	index,
	onKeyDown,
}: Entry & {
	refCB: (el: HTMLInputElement) => void,
	index: number,
	onKeyDown: (event: KeyboardEvent) => void,
}) => {
	const [editing, setEditing] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [chap, setChap] = useState<string|number>(chapter);
	const dispatch = useAppDispatch();

	const setChapter = (id: string, value: number) => {
		dispatch(
			updateEntryById({
				id,
				data: {
					chapter: value
				}
			})
		);
	};

	const handleChapterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setChap(event.target.value.trim())
	}

	const handleChapterFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		event.preventDefault();
		setEditing(true);
		dispatch(updateListIndex(index));
	}

	const handleChapterBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		event.preventDefault();
		setChapter(id, Math.max(+chap, 0));
		setEditing(false);
	};

	const handleChapterInc = () => {
		setChap(Math.max(Math.floor(+chap + 1), 0));
		setChapter(id, Math.max(+chap + 1, 0));
	}

	const handleChapterDec = () => {
		setChap(Math.max(Math.floor(+chap - 1), 0));
		setChapter(id, Math.max(+chap - 1, 0));
	}

	const handleEdit = () => {
		setEditModalOpen(true);
	}

	const handleDelete = () => {
		setDeleteModalOpen(true);
	};

	function closeEditModal() {
		setEditModalOpen(false);
	}

	function closeDeleteModal() {
		setDeleteModalOpen(false);
	}

	function updateLastRead(
		event: React.MouseEvent<HTMLAnchorElement>,
		id: string,
	) {
		if (event.button === 0 || event.button === 1) {
			dispatch(
				updateEntryById({
					id,
					data: {
						lastRead: Date.now(),
					}
				})
			)
		}
	}

	useEffect(() => {
		setChap(chapter);
	}, [chapter])

	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="book-entry">
				<div className="book-entry__art">
					<a
						href={url}
						target="_blank"
						onClick={(event) => updateLastRead(event, id)}
						onAuxClick={(event) => updateLastRead(event, id)}
					>
						<img src={artUrl} alt={`Cover art for ${title}`} />
					</a>
				</div>
				<div className="book-entry__data">
					<h2>
						<a
							href={url}
							target="_blank"
							onClick={(event) => updateLastRead(event, id)}
							onAuxClick={(event) =>  updateLastRead(event, id)}
						>
							{title}
						</a>
					</h2>
					<div className="book-entry__chapter-row">
						<div className="book-entry__chapter-group">
							<label>
								Chapter:
								<span
									className={classnames(
										"book-entry__chapter-value",
										{
											"opacity-0 absolute": editing
										}
									)}
									onClick={() => setEditing(true)}
								>
									{chapter}
								</span>
								<input
									className={classnames(
										"book-entry__chapter-input",
										{
											"opacity-0 absolute": !editing
										}
									)}
									type="text"
									ref={refCB}
									size={4}
									value={chap}
									onChange={handleChapterChange}
									onFocus={handleChapterFocus}
									onBlur={handleChapterBlur}
									onKeyDown={onKeyDown}
								/>
							</label>
							<div className="book-entry__chapter-btn-row">
								<button
									type="button"
									className={classnames(
										"book-entry__chapter-plusminus-btn",
										{
											"opacity-0 absolute": !editing
										}
									)}
									onClick={handleChapterDec}
									onFocus={() => setEditing(true)}
									onBlur={() => setEditing(false)}
								>
									-
								</button>
								<button
									type="button"
									className={classnames(
										"book-entry__chapter-plusminus-btn",
										{
											"opacity-0 absolute": !editing
										}
									)}
									onClick={handleChapterInc}
									onFocus={() => setEditing(true)}
									onBlur={() => setEditing(false)}
								>
									+
								</button>
							</div>
						</div>

						<span className="book-entry__last_read">
							Last Read: <strong>{formatDistance(lastRead, Date.now())} ago</strong>
						</span>
					</div>
				</div>
				<div className="book-entry__btns">
					<button
						type="button"
						className="book-entry__btn__edit"
						onClick={handleEdit}
					>
						<FontAwesomeIcon icon={faPencil} size="lg" />
						<span className="book-entry__btn__mobile-text">
							Edit
						</span>
					</button>
					<button
						type="button"
						className="book-entry__btn__delete"
						onClick={handleDelete}
					>
						<FontAwesomeIcon icon={faTrash} size="lg" />
						<span className="book-entry__btn__mobile-text">
							Delete
						</span>
					</button>
				</div>
			</div>
			<ReactModal
				isOpen={editModalOpen}
				closeTimeoutMS={250}
				contentLabel="Edit Entry"
				overlayClassName="modal-backdrop"
				className="modal"
				onRequestClose={closeEditModal}
				appElement={document.getElementById('modal-root') || undefined}
				style={{ content: { width: '20rem' }}}
			>
				<EditEntryForm
					onSubmit={closeEditModal}
					onCancel={closeEditModal}
					entryId={id}
					entry={{ title, url, artUrl, chapter, lastRead }}
				/>
			</ReactModal>
			<ReactModal
				isOpen={deleteModalOpen}
				closeTimeoutMS={250}
				contentLabel="Delete List Confirmation Modal"
				overlayClassName="modal-backdrop"
				className="modal"
				onRequestClose={closeDeleteModal}
				appElement={document.getElementById('modal-root') || undefined}
				style={{ content: { width: '20rem' }}}
			>
				<DeleteEntryConfirmationForm
					onSubmit={closeDeleteModal}
					onCancel={closeDeleteModal}
					entryId={id}
					entryName={title}
				/>
			</ReactModal>
		</motion.div>
	)
}