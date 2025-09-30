import { IconSearch } from "@tabler/icons-react";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { fetchUser } = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const username = inputRef.current?.value.trim();
    if (!username) {
      setError("Please enter a username");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await fetchUser(username);
      navigate(`/user/${username}`);
    } catch (err) {
      navigate("/not-found");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="m-auto relative w-full max-w-xl mt-20"
    >
      {isLoading && <p className="text-center text-2xl mb-4">Loading...</p>}
      <div className="flex items-center">
        <input
          ref={inputRef}
          className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full rounded-md p-2 pr-10 text-white placeholder-white/70"
          type="text"
          placeholder="Enter a username"
        />
        <button type="submit" className="absolute right-3">
          <IconSearch className="cursor-pointer text-white" />
        </button>
      </div>
      {error && <p className="text-center mt-2 text-red-700">{error}</p>}
    </form>
  );
};

export default Search;
