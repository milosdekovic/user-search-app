import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import UserDetails from "../components/UserDetails";
import NotFound from "./NotFound";

const User = () => {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div>
        <NotFound />
      </div>
    );

  return (
    <div>
      <UserDetails
        avatar_url={user.avatar_url}
        name={user.name || user.login}
        followers={user.followers}
        html_url={user.html_url}
        public_repos={user.public_repos}
        key={user.id}
      />
    </div>
  );
};

export default User;
