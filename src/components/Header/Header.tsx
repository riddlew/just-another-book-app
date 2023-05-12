import { ExportBtn } from "@/components/Header/ExportBtn";
import { ImportBtn } from "@/components/Header/ImportBtn";
import { WhatIsThisBtn } from "@/components/Header/WhatIsThisBtn";

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
					<li className="block w-full">
						<a
							href="https://www.github.com/riddlew/libro-list"
							className="transition-colors block w-full sm:inline-block sm:px-2 py-4 font-bold hover:bg-theme-purple-200 text-center"
						>
							View on GitHub
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
