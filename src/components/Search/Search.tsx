import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export const Search = ({filter}) => {
	const [visible, setVisible] = useState(false);

	const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
		filter(event.target.value.trim());
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