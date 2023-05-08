import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useAppDispatch } from "@/hooks";
import { filterEntries, setKeywords } from "@/slices/entriesSlice";
import { NewListButton } from "@/components/ListButtons/NewListButton";
import { EditListButton } from "@/components/ListButtons/EditListButton";
import { DeleteListButton } from "@/components/ListButtons/DeleteListButton";

export const Search = () => {
	const [visible, setVisible] = useState(false);
	const dispatch = useAppDispatch();

	const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
		const keywords = event.target.value.trim();
		dispatch(
			setKeywords(keywords)
		);
		dispatch(
			filterEntries(keywords)
		)
	}

	return (
		<div className="search active">
			<div className="flex justify-center items-center gap-1">
				<button
					type="button"
					className="search__btn"
					aria-expanded={visible}
					onClick={() => setVisible(prev => !prev)}
				>
					<FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
				</button>
				<NewListButton />
				<EditListButton />
				<DeleteListButton />
			</div>
			{visible && (
				<input
					ref={(ref) => ref?.focus()}
					type="text"
					className="search__input"
					onChange={handleFilter}
				/>
			)}
		</div>
	)
}