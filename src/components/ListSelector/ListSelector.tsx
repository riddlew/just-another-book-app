import { useAppDispatch } from "@/hooks";
import { loadList } from "@/slices/entriesSlice";
import { useEffect } from "react"
import { toast } from 'react-hot-toast'

export const ListSelector = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const list = document.getElementById('list_selector') as HTMLSelectElement;

    // Need timeout to wait for rendering to finish before dispatching, otherwise
    // toast will not show on failure to load list.
    const timeout = setTimeout(() => {
      dispatch(loadList(list.value));
    });

    return () => clearTimeout(timeout);
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