export const ListSelector = () => {
	return (
		<>
			<p className="text-center mt-16">You are currently reading</p>
      <div className="text-center">
        <div className="current-select">
          <select>
            <option>My List</option>
            <option>My List</option>
            <option>My List With a Really Long Name</option>
            <option>My List</option>
          </select>
          <span className="current-select__focus"></span>
        </div>
      </div>
		</>
	)
}