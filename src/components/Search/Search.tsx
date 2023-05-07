import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useAppDispatch } from "@/hooks";
import { setKeywords } from "@/slices/searchSlice";
import { filterEntries } from "@/slices/entriesSlice";

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
			<button
				type="button"
				className="search__btn"
				aria-expanded={visible}
				onClick={() => setVisible(prev => !prev)}
			>
				<FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
			</button>
			{visible && (
				<input
					type="text"
					className="search__input"
					onChange={handleFilter}
				/>
			)}
		</div>
	)
}