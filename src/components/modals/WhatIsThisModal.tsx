import { ModalFormProps } from "@/types";
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhatIsThisModal = ({onCancel}: ModalFormProps) => {
	return (
		<>
			<div style={{
				overflowY: 'auto',
				height: 'calc(100% - 3.2rem)'
			}}>
				<h2>What is this?</h2>
				<p>
					This app is designed to help you track your progress in media that has
					chapters or episodes. This could be books, novels, anime, or tv shows.
					You can create several lists that can hold a list of entries. For example,
					you might have a list for Fantasy novels you're reading, and each entry
					in that list is a fantasy novel you are reading. Each of those entries
					will track what chapter / episode you last viewed.
				</p>
				<h3>How is this different than every other book tracker?</h3>
				<p>
					Most of the trackers I've seen require too much movement between the
					keyboard and mouse, and feel very inefficient. For instance, on other
					apps if you want to edit your progress, you might have to click on edit,
					click on a text box, enter a new chapter number, and click on save. The
					whole time, this requires multiple movements back and forth between
					the keyboard and mouse. Repeat this several hundred times, and the
					amount of time it takes to update your list grows exponentially.
				</p>
				<p>
					This tracker bypasses that tedious process. To move between list
					entries, you can use the <span className="inline-key">J</span> and
					<span className="inline-key">K</span> keys, and use the
					<span className="inline-key">H</span> and
					<span className="inline-key">L</span> keys to decrease and increase
					the chapter numbers. You will still have the option to type in the
					number yourself if you want. Once you move to the next list entry,
					the previous entry's information will be saved.
				</p>
				<h3>What are the shortcuts?</h3>
				<ul>
					<li className="keybind">
						<span className="key" aria-label="H Key">
							H
						</span>
						<p>
							Decrease the chapter of the current entry by 1.
						</p>
					</li>
					<li className="keybind">
						<span className="key" aria-label="J Key">
							J
						</span>
						<p>
							Move to the next entry in the list, or move to the beginning of
							the list if you are curently at the end.
						</p>
					</li>
					<li className="keybind">
						<span className="key" aria-label="K Key">
							K
						</span>
						<p>
							Move to the previous entry in the list, or move to the end of the
							list if you are curently at the beginning.
						</p>
					</li>
					<li className="keybind">
						<span className="key" aria-label="L Key">
							L
						</span>
						<p>
							Increase the chapter of the current entry by 1.
						</p>
					</li>
				</ul>
			</div>
			<button
				type="button"
				className="font-bold rounded-md block w-full bg-theme-gray-200 text-white py-2.5 px-5 mt-2.5"
				onClick={onCancel}
			>
				Close
			</button>
		</>
	);
}
