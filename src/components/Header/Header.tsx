export const Header = () => {
	return (
		<div className="bg-theme-purple-300 text-white">
			<div className="container mx-auto">
				<ul className="flex justify-center items-center">
					<li>
						<button
              type="button"
              className="transition-colors inline-block px-12 py-4 font-bold hover:bg-theme-purple-200"
            >
              Manage
            </button>
					</li>
					<li>
						<button
              type="button"
              className="transition-colors inline-block px-12 py-4 font-bold hover:bg-theme-purple-200"
            >
              Export
            </button>
					</li>
					<li>
						<button
              type="button"
              className="transition-colors inline-block px-12 py-4 font-bold hover:bg-theme-purple-200"
            >
              Import
            </button>
					</li>
					<li>
						<button
              type="button"
              className="transition-colors inline-block px-12 py-4 font-bold hover:bg-theme-purple-200"
            >
              What is this?
            </button>
					</li>
				</ul>
			</div>
		</div>
	);
};