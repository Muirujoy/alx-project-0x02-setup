// pages/users.tsx
import React from "react";
import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="grid gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default UsersPage;
