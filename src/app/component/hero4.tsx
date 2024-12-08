import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="bg-black text-white p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">From Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/image/m1.svg"
              alt="Salad"
              width={400}
              height={300}
              className="rounded-lg mb-2"
            />
            <h2 className="text-lg font-bold mb-2">Salad</h2>
            <p>Fresh greens, vegetables, and dressing.</p>
            <Link href="/salad" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
              Learn More
            </Link>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/image/m2.svg"
              alt="Pizza"
              width={400}
              height={300}
              className="rounded-lg mb-2"
            />
            <h2 className="text-lg font-bold mb-2">Pizza</h2>
            <p>Freshly baked with your choice of toppings.</p>
            <Link href="/pizza" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
              Learn More
            </Link>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/image/m3.svg"
              alt="Burger"
              width={400}
              height={300}
              className="rounded-lg mb-2"
            />
            <h2 className="text-lg font-bold mb-2">Burger</h2>
            <p>Juicy patty with your favorite toppings.</p>
            <Link href="/burger" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;