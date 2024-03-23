import { useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";
export default function SearchBox() {
  const filter = useSelector((state) => state.filter.name);
  const dispath = useDispatch();
  return (
    <div className={css.formInput}>
      <label htmlFor="search">Find contac by name</label>
      <input
        value={filter}
        type="text"
        id="search"
        onChange={(e) => {
          dispath(changeFilter(e.target.value));
        }}
      ></input>
    </div>
  );
}
