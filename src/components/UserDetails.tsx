import { useState, useEffect } from "react";
import { IconCode, IconHeartFilled } from "@tabler/icons-react";

interface UserDetailsProps {
  avatar_url: string;
  name: string;
  followers: number;
  public_repos: number;
  login: string;
}

interface Follower {
  id: number;
  login: string;
  avatar_url: string;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
}

const UserDetails = ({
  avatar_url,
  name,
  followers,
  public_repos,
  login,
}: UserDetailsProps) => {
  const [isFollowersModalOpen, setFollowersModalOpen] = useState(false);
  const [isReposModalOpen, setReposModalOpen] = useState(false);
  const [followersList, setFollowersList] = useState<Follower[]>([]);
  const [reposList, setReposList] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const closeModal = () => {
    setFollowersModalOpen(false);
    setReposModalOpen(false);
  };

  useEffect(() => {
    if (isFollowersModalOpen && followersList.length === 0) {
      fetchFollowers();
    }
  }, [isFollowersModalOpen]);

  useEffect(() => {
    if (isReposModalOpen && reposList.length === 0) {
      fetchRepos();
    }
  }, [isReposModalOpen]);

  const fetchFollowers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${login}/followers`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch followers");
      }
      const data = await response.json();
      setFollowersList(data);
    } catch (err) {
      setError("Error fetching followers. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRepos = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${login}/repos`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      setReposList(data);
    } catch (err) {
      setError("Error fetching repositories. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col relative">
      <img
        className="rounded-full border-2 mt-10 w-[250px] lg:w-[300px] mx-auto"
        src={avatar_url}
        alt="User Avatar"
      />
      <h4 className="mx-auto text-2xl font-bold mt-2">{name || login}</h4>
      <div className="mx-auto mt-5 flex gap-20">
        {/* Followers Section */}
        <div
          className="grid cursor-pointer"
          onClick={() => setFollowersModalOpen(true)}
        >
          Followers
          <div className="flex gap-1 justify-center">
            <IconHeartFilled color="#ff0000" />
            {followers}
          </div>
        </div>

        {/* Public Repos Section */}
        <div
          className="grid cursor-pointer"
          onClick={() => setReposModalOpen(true)}
        >
          Public repos
          <div className="flex gap-1 justify-center">
            <IconCode />
            {public_repos}
          </div>
        </div>
      </div>

      {/* Followers Modal */}
      {isFollowersModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Followers: </h2>
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && (
              <ol className="list-decimal list-inside">
                {followersList.map((follower, index) => (
                  <li key={follower.id} className="flex items-center mb-2">
                    <span className="mr-2">{index + 1}.</span>
                    <span>{follower.login}</span>
                  </li>
                ))}
              </ol>
            )}
            <button
              className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Public Repos Modal */}
      {isReposModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 text-black rounded-lg shadow-lg w-80 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Public Repositories:</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && (
              <ol>
                {reposList.map((repo, index) => (
                  <li key={repo.id} className="mb-2">
                    <span className="mr-2">{index + 1}.</span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ol>
            )}
            <button
              className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
