import { useState } from "react";
import { BookEntry } from "./BookEntry"

export const BookList = ({filtered, setNewChapter}: {filtered: any[], setNewChapter: (id: number, value:number) => void}) => {

	return (
		<div className="book-list">
			{filtered.map(entry => (
				<BookEntry
					key={`book-entry-${entry.id}`}
					id={entry.id}
					title={entry.title}
					chapter={entry.chapter}
					setChapter={setNewChapter}
				/>
			))}
		</div>
	)
}