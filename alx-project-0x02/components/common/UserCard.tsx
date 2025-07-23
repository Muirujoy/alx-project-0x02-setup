// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-sm text-gray-600">{email}</p>
    <p className="text-sm">
      {address.street}, {address.city}, {address.zipcode}
    </p>
  </div>
);

export default UserCard;
