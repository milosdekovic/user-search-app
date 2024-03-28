import { IconCode, IconHeartFilled } from "@tabler/icons-react";

interface UserDetailsProps {
  avatar_url: string;
  name: string;
  followers: number;
  public_repos: number;
  login: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  avatar_url,
  name,
  followers,
  public_repos,
  login,
}) => {
  return (
    <div className="flex flex-col">
      <img
        className="rounded-full mt-10 w-[250px] lg:w-[350px]  mx-auto"
        src={avatar_url}
        alt="User Avatar"
      />
      <h4 className="mx-auto text-2xl font-bold mt-2">{name || login}</h4>
      <div className="mx-auto mt-5 flex gap-20">
        <div className="grid">
          Followers
          <div className="flex gap-1 justify-center">
            <IconHeartFilled color="#ff0000" />
            {followers}
          </div>
        </div>
        <div className="grid">
          Public repos
          <div className="flex gap-1 justify-center">
            <IconCode />
            {public_repos}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
