import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export const Search = () => {
	const [visible, setVisible] = useState(false);

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
			{visible && <input type="text" className="search__input" />}
		</div>
	)
}