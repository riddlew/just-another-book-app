import {
  selectCurrentList,
  selectLists,
  useAppDispatch,
  useAppSelector
} from "@/hooks/redux";
import {
  clearKeywords,
  loadList,
  loadLists
} from "@/slices/entriesSlice";
import { useEffect } from "react"

export const ListSelector = () => {
  const dispatch = useAppDispatch();
  const lists = useAppSelector(selectLists);
  const currentList = useAppSelector(selectCurrentList);

  useEffect(() => {
    dispatch(loadLists());
    // Need timeout to wait for rendering to finish before dispatching, otherwise
    // toast will not show on failure to load list.
    if (currentList !== '') {
      const timeout = setTimeout(() => {
        dispatch(loadList(currentList));
      });

      return () => clearTimeout(timeout);
    }
  }, [dispatch, currentList]);

  function handleListChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    dispatch(clearKeywords());
    dispatch(loadList(value));
  }

  return (
    <>
      {lists.length === 0 ? (
        <>
          <p className="text-center">You do not have any lists yet!</p>
          <p className="text-center">
            To get started, create a list by clicking the green circle with a
            plus sign below.
          </p>
        </>
      ) : (
        <p className="text-center">You are currently reading</p>
      )}
      <div className="flex justify-center items-center mt-4 gap-2">
        <div className="current-select">
          <select
            id="list_selector"
            onChange={handleListChange}
            value={currentList}
          >
            {lists.map(list => (
              <option
                key={list.slug}
                value={list.slug}
              >{list.name}</option>

            ))}
          </select>
          <span className="current-select__focus"></span>
        </div>
      </div>
		</>
	)
}