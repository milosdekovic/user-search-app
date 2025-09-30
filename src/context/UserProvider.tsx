import { ReactNode, createContext, useState } from "react";
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
    const response = await fetch(`${BASE_URL}/${userId}`);
    const data = await response.json();
    if (data.login) {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data)); // čuvamo u storage
    } else {
      setUser(null);
      throw new Error("User not found");
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
