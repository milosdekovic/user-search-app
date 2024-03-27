import { IconSearch } from "@tabler/icons-react";
import React from "react";

const Search = () => {
  return (
    <div className="m-auto relative w-[50%] mt-20">
      <div className="flex items-center">
        <input
          className="bg-blue-200 w-full rounded-md p-2"
          type="text"
          placeholder="Search any user"
        />
        <IconSearch className="absolute right-3" />
      </div>
    </div>
  );
};

export default Search;
