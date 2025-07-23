import React from "react";
import { GetStaticProps } from "next";
import { UserData } from "../../interface"; // Use relative path here

interface UsersPageProps {
  users: UserData[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user: UserData) => (
          <li key={user.id} className="border p-4 rounded shadow">
            <p className="text-lg font-medium">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div> 
  )
};


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserData[] = data.map((user: unknown) => {
    return ({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
