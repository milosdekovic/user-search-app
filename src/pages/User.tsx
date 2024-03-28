import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import UserDetails from "../components/UserDetails";
import NotFound from "./NotFound";

const User = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <UserDetails
          avatar_url={user.avatar_url}
          name={user.name || user.login}
          followers={user.followers}
          login={user.login}
          public_repos={user.public_repos}
          key={user.id}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default User;
