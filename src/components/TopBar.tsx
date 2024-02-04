import Link from 'next/link';

const TopBar = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10 bg-[#062438]">
      <nav>
        <ul className="flex space-x-4">
          <li className="text-[#062438] hover:text-yellow-600">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#062438] hover:text-yellow-600">
            <Link href="/work">Products</Link>
          </li>
          <li className="text-[#062438] hover:text-yellow-600">Work</li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
