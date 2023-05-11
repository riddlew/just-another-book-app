import { ExportBtn } from "./ExportBtn";
import { ImportBtn } from "./ImportBtn";
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
						<ImportBtn />
					</li>
					<li className="block w-full">
						<WhatIsThisBtn />
					</li>
				</ul>
			</div>
		</div>
	);
};
