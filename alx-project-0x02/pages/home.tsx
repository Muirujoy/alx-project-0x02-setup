// pages/home.tsx
import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      <Card
        title="Card One"
        content="This is the content of the first card. It can be anything you'd like."
      />

      <Card
        title="Card Two"
        content="Here's some content for the second card. This shows reusability."
      />

      <Card
        title="Card Three"
        content="You can create as many cards as you want using the same component."
      />
    </div>
  );
};

export default HomePage;
