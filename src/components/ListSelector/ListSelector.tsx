import { useAppDispatch } from "@/hooks";
import { loadList } from "@/slices/entriesSlice";
import { useEffect } from "react"

export const ListSelector = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const list = document.getElementById('list_selector') as HTMLSelectElement;
    dispatch(loadList(list.value));
  }, [dispatch]);

	return (
		<>
			<p className="text-center">You are currently reading</p>
      <div className="text-center">
        <div className="current-select">
          <select id="list_selector">
            <option value="test">Test</option>
            <option value="my_list">My List</option>
            <option value="my_list_with_a_really_long_name">My List With a Really Long Name</option>
          </select>
          <span className="current-select__focus"></span>
        </div>
      </div>
		</>
	)
}