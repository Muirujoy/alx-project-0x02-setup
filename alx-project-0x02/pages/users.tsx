import React from "react";
import { GetStaticProps } from "next";
import { UserData } from "@/interface";

interface UsersPageProps {
  users: UserData[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded shadow">
            <p className="text-lg font-medium">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ getStaticProps function
export const getStaticProps: GetStaticProps = async () => {
  // Simulated static data; replace with fetch or database call if needed
  const users: UserData[] = [
    { id: 1, name: "Alice Doe", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
  ];

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
