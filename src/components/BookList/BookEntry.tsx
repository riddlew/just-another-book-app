import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import classnames from "classnames";
import { useAppDispatch } from '@/hooks'
import { updateEntryById } from '@/slices/entriesSlice'
import { EntryProps } from "@/types";

export const BookEntry = ({id, title, artUrl, chapter}: EntryProps) => {
	const [editing, setEditing] = useState(false);
	const dispatch = useAppDispatch();

	const setChapter = (id: number, value: number) => {
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
		const value = event.target.value.trim();
		if(value !== "" && !Number.isNaN(+value)) {
			setChapter(id, +value);
		}
	}

	const handleChapterFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		event.preventDefault();
		setEditing(true);
	}

	const handleChapterBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		event.preventDefault();
		setEditing(false);
	};

	return (
		<div className="book-entry">
			<div className="book-entry__art">
				<img src={artUrl} alt="" />
			</div>
			<div className="book-entry__data">
				<h2>{title}</h2>
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
								size={4}
								value={chapter}
								onChange={handleChapterChange}
								onFocus={handleChapterFocus}
								onBlur={handleChapterBlur}
							/>
						</label>
						<button
							type="button"
							className={classnames(
								"book-entry__chapter-plusminus-btn",
								{
									"opacity-0 absolute": !editing
								}
							)}
							onClick={() => setChapter(id, Math.max(chapter - 1, 0))}
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
							onClick={() => setChapter(id, chapter + 1)}
							onFocus={() => setEditing(true)}
							onBlur={() => setEditing(false)}
						>
							+
						</button>
					</div>

					<span className="book-entry__last_read">
						Last Read: <strong>2 days ago</strong>
					</span>
				</div>
			</div>
			<div className="book-entry__btns">
				<button
					type="button"
					className="book-entry__btn__edit"
				>
					<FontAwesomeIcon icon={faPencil} size="lg" />
					<span className="book-entry__btn__mobile-text">
						Edit
					</span>
				</button>
				<button
					type="button"
					className="book-entry__btn__delete"
				>
					<FontAwesomeIcon icon={faTrash} size="lg" />
					<span className="book-entry__btn__mobile-text">
						Delete
					</span>
				</button>
			</div>
		</div>
	)
}