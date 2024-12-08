import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-8 md:p-16">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/image/u1.svg" // Update with the actual path to your background image
          alt="Menu Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold">Our Menu</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        <nav className="text-sm mb-4">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>{' '}
          &gt;{' '}
          <span className="text-gray-900 font-semibold">Menu</span>
        </nav>

        <section className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4">Starter Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                  <Image
                    src={"/image/u2.svg"}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-md sm:text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-md font-semibold text-orange-500 mt-1">{item.price}</p>
                  <p className="text-xs text-gray-400">{item.calories}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const menuItems = [
  {
    name: 'Alder Grilled Chinook Salmon',
    description: 'Toasted French bread topped with romaine, cheddar',
    price: '$32',
    calories: '580 CAL',
    image: '/image/u.svg', // Replace with actual image path
  },
  {
    name: 'Berries and Creme Tart',
    description: 'Gorgonzola, ricotta, mozzarella, lavaggio',
    price: '$43',
    calories: '790 CAL',
    image: '/image/u1.svg', // Replace with actual image path
  },
  {
    name: 'Tormentoso Bush Pizza Pinotage',
    description: 'Ground cumin, avocados, peeled and cubed',
    price: '$14',
    calories: '1000 CAL',
    image: '/image/u2.svg', // Replace with actual image path
  },
  {
    name: 'Spicy Vegan Potato Curry',
    description: 'Spreadable cream cheese, crumbled blue cheese',
    price: '$35',
    calories: '560 CAL',
    image: '/image/u3.svg', // Replace with actual image path
  },
];

export default Menu;
