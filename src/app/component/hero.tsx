import Image from "next/image";
import Link from "next/link";

const FoodTruckComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 px-6 md:px-12 border-b border-gray-800">
        {/* Logo */}
        <Link href="/">
          <div className="text-yellow-500 text-2xl font-bold cursor-pointer">FoodTruck</div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/Menu" className="hover:text-white">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/shop" className="hover:text-white">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Search Icon */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-gray-400 px-4 py-2 rounded-full focus:outline-none"
            />
          </div>
          <button className="text-yellow-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="relative flex items-center justify-center min-h-[calc(100vh-64px)] px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 md:flex-row md:items-center md:space-y-0 md:text-left">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h3 className="text-yellow-500 font-semibold text-lg">So Quick & Charming!</h3>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              The Art of Speed
              <br />
              <span className="text-yellow-500">Food Quality</span>
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
            </p>
            <Link href="/menu">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition">
                See Menu
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="rounded-full overflow-hidden shadow-lg">
              <Image
                src="/image/h1.svg" // Replace with the correct image path
                alt="Food Plate"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute top-4 left-4 rounded-full border-2 border-white p-2">
              <Image src="/image/h2.svg" alt="Side Food 1" width={40} height={40} className="rounded-full" />
            </div>
            <div className="absolute bottom-4 right-4 rounded-full border-2 border-white p-2">
              <Image src="/image/h3.svg" alt="Side Food 2" width={40} height={40} className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTruckComponent;
