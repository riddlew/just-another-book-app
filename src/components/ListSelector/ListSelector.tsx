import { useAppDispatch, useAppSelector } from "@/hooks";
import { loadList, loadLists } from "@/slices/entriesSlice";
import { useEffect } from "react"

export const ListSelector = () => {
  const dispatch = useAppDispatch();
  const lists = useAppSelector(state => state.entries.lists);

  useEffect(() => {
    const list = document.getElementById('list_selector') as HTMLSelectElement;

    // Need timeout to wait for rendering to finish before dispatching, otherwise
    // toast will not show on failure to load list.
    const timeout = setTimeout(() => {
      dispatch(loadList(list.value));
    });

    return () => clearTimeout(timeout);
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadLists());
  }, [dispatch]);

  function handleListChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    dispatch(loadList(value));
  }

  return (
    <>
      <p className="text-center">You are currently reading</p>
      <div className="flex justify-center items-center mt-4 gap-2">
        <div className="current-select">
          <select
            id="list_selector"
            onChange={handleListChange}
          >
            {lists.map(list => (
              <option key={list.slug} value={list.slug}>{list.name}</option>

            ))}
          </select>
          <span className="current-select__focus"></span>
        </div>
      </div>
		</>
	)
}