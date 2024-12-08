import Image from 'next/image';
import Link from 'next/link';

const MenuWithPartners = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Dessert Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Dessert Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Dessert</h2>
            <div className="space-y-6">
              {desserts.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white shadow-lg p-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-md sm:text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.calories}</p>
                  </div>
                  <p className="text-lg font-bold text-orange-500">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Dessert Image */}
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              src="/image/ca.svg" // Replace with your dessert image path
              alt="Desserts"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Drinks Section */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Drinks Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Drinks</h2>
            <div className="space-y-6">
              {drinks.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white shadow-lg p-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-md sm:text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.calories}</p>
                  </div>
                  <p className="text-lg font-bold text-orange-500">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Drinks Image */}
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              src="/image/dr.svg" // Replace with your drinks image path
              alt="Drinks"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Partners Section */}
        <section className="mt-16 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
            We work with the best people
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="w-24 h-24 sm:w-32 sm:h-32 relative">
                <Image
                  src={`/image/k2.svg`}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const desserts = [
  {
    name: 'Fig and Lemon Cake',
    description: 'Toasted French bread topped with romaine, cheddar',
    price: '$32',
    calories: '560 CAL',
  },
  {
    name: 'Creamy Mascarpone Cake',
    description: 'Gorgonzola, ricotta, mozzarella, lavaggio',
    price: '$43',
    calories: '780 CAL',
  },
  {
    name: 'Pastry, Blueberries, Lemon Juice',
    description: 'Ground cumin, avocados, peeled and cubed',
    price: '$14',
    calories: '900 CAL',
  },
  {
    name: 'Pain au Chocolat',
    description: 'Spreadable cream cheese, crumbled blue cheese',
    price: '$35',
    calories: '560 CAL',
  },
];

const drinks = [
  {
    name: 'Caffè Macchiato',
    description: 'Rich espresso with steamed milk, lavaggio',
    price: '$32',
    calories: '60 CAL',
  },
  {
    name: 'Aperol Spritz Cappuccino',
    description: 'Espresso, rich froth, whipped topping',
    price: '$43',
    calories: '110 CAL',
  },
  {
    name: 'Caffè Latte Campari',
    description: 'Lavazza blend espresso, topped with milk foam',
    price: '$14',
    calories: '100 CAL',
  },
  {
    name: 'Tormentoso Bush Pinotage',
    description: 'Signature blend, topped with steamed milk',
    price: '$35',
    calories: '120 CAL',
  },
];

const partners = [
  { name: 'Restaurant', logo: '/logos/restaurant.png' },
  { name: 'Bakery', logo: '/logos/bakery.png' },
  { name: 'Chef Catering', logo: '/logos/chef-catering.png' },
  { name: 'Bistro', logo: '/logos/bistro.png' },
  { name: 'Bakery Goods', logo: '/logos/bakery-goods.png' },
];

export default MenuWithPartners;
