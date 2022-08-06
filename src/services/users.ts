import { User } from "../types";

export const getUsers = async () : Promise<User[]> => {
  const data = await fetch('/api/users');
  return data.json();
};

export const createUser = async (user: User) : Promise<User> => {
    const data = await fetch('/api/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    if(!data.ok) throw new Error();
    return data.json();
};