import { ExportBtn } from "./ExportBtn";
import { WhatIsThisBtn } from "./WhatIsThisBtn";

export const Header = () => {
	return (
		<div className="bg-theme-purple-300 text-white">
			<div className="container mx-auto px-0">
				<ul className="flex flex-col sm:flex-row justify-center items-center">
					<li className="block w-full">
						<ExportBtn />
					</li>
					<li className="block w-full">
						<button
							type="button"
							className="transition-colors block w-full sm:inline-block sm:px-2 py-4 font-bold hover:bg-theme-purple-200"
						>
							Export
						</button>
					</li>
					<li className="block w-full">
						<button
							type="button"
							className="transition-colors block w-full sm:inline-block sm:px-2 py-4 font-bold hover:bg-theme-purple-200"
						>
							Import
						</button>
					</li>
					<li className="block w-full">
						<WhatIsThisBtn />
					</li>
				</ul>
			</div>
		</div>
	);
};
