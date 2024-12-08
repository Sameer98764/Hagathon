import Image from 'next/image';
import Link from 'next/link';

const MainCourse = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      {/* Main Course Section */}
      <div className="max-w-6xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Main Course</h2>
            <div className="space-y-6">
              {menuItems.map((item, index) => (
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
          {/* Image Section */}
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              src="/image/i1.svg" // Replace with your image path
              alt="Main Course"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <div className="bg-black text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-orange-500 text-3xl sm:text-4xl font-bold">{stat.number}</div>
              <div className="text-sm sm:text-md mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const menuItems = [
  {
    name: 'Optic Big Breakfast Combo Menu',
    description: 'Toasted French bread topped with romaine, cheddar',
    price: '$32',
    calories: '560 CAL',
  },
  {
    name: 'Cashew Chicken With Stir-Fry',
    description: 'Gorgonzola, ricotta, mozzarella, lavaggio',
    price: '$43',
    calories: '700 CAL',
  },
  {
    name: 'Vegetables & Green Salad',
    description: 'Ground cumin, avocados, peeled and cubed',
    price: '$14',
    calories: '900 CAL',
  },
  {
    name: 'Spicy Vegan Potato Curry',
    description: 'Spreadable cream cheese, crumbled blue cheese',
    price: '$35',
    calories: '560 CAL',
  },
];

const stats = [
  { number: '420', label: 'Professional Chefs' },
  { number: '320', label: 'Items Of Food' },
  { number: '30+', label: 'Years Of Experienced' },
  { number: '220', label: 'Happy Customers' },
];

export default MainCourse;
