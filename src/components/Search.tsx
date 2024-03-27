import { IconSearch } from "@tabler/icons-react";
import { useContext, useRef } from "react";
import { UserContext } from "../context/UserProvider";

const Search = () => {
  const { fetchUser } = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handeSearch = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
      fetchUser(inputRef.current.value);
    }
  };
  return (
    <div className="m-auto relative w-[50%] mt-20">
      <div className="flex items-center">
        <input
          ref={inputRef}
          className="bg-green-300 w-full rounded-md p-2"
          type="text"
          placeholder="Search any user"
        />
        <IconSearch onClick={handeSearch} className="absolute right-3" />
      </div>
    </div>
  );
};

export default Search;
