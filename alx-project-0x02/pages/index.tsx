import Header from "../components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Header />
      <div className="text-center mt-10 text-2xl font-semibold">
        🚀 Hello, this is a welcome message from your ALX Project!
      </div>
    </main>
  );
}
