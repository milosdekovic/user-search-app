import { ReactNode, createContext, useState } from "react";
import NotFound from "../pages/NotFound";
export interface User {
  id: number;
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  html_url: string;
  public_repos: number;
}

interface UserContextType {
  user: User | null;
  fetchUser: (userId: string) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  fetchUser: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const BASE_URL = "https://api.github.com/users";
  const fetchUser = async (userId: string) => {
    if (userId.trim() === "") return;
    try {
      const response = await fetch(`${BASE_URL}/${userId}`);
      const data = await response.json();
      if (data.login) {
        setUser(data);
      } else {
        setUser(null);
        <NotFound />;
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };
  return (
    <div>
      <UserContext.Provider value={{ user, fetchUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
