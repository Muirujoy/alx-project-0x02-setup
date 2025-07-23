import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-4 py-3">
      <nav className="flex gap-6">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
