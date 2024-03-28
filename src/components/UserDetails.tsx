import { IconCode, IconHeart } from "@tabler/icons-react";

interface UserDetailsProps {
  avatar_url: string;
  name: string;
  followers: number;
  public_repos: number;
  html_url: string;
  login: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  avatar_url,
  name,
  followers,
  public_repos,
  login,
  html_url,
}) => {
  return (
    <div className="flex flex-col">
      <img
        className="rounded-full mt-10 mx-auto"
        src={avatar_url}
        alt="User Avatar"
      />
      <h4 className="mx-auto text-2xl font-bold mt-2">{name || login}</h4>
      <div className="mx-auto mt-5 flex gap-5">
        <div className="flex gap-1">
          <IconHeart />
          {followers}
        </div>
        <div className="flex gap-1">
          <IconCode />
          {public_repos}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
