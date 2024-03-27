import { ReactNode, createContext, useState } from "react";

export const UserContext = createContext<{
  user: null; // Update any to the type of your user object
  fetchUser: (userId: string) => void; // Specify the parameter type
}>({
  user: null,
  fetchUser: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const BASE_URL = "https://api.github.com/users";
  const fetchUser = async (userId: string) => {
    if (userId.trim() === "") return;
    try {
      const response = await fetch(`${BASE_URL}/${userId}`);
      const data = await response.json();
      setUser(data);
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
