// components/FoodMenu.tsx
import Image from "next/image";
import Link from "next/link";

const FoodMenu: React.FC = () => {
  return (
    <div className="bg-black text-white py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-yellow-400">Choose Food Item</h2>
      </div>

      {/* Food Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16">
        {/* Food Item 1 */}
        <div className="relative border-2 border-yellow-500 rounded-lg overflow-hidden">
          <Image
            src="/image/c1.svg" // Replace with your image path
            alt="Food Item 1"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm">
            Save 30% <br /> Food Food Deals
          </div>
        </div>

        {/* Food Item 2 */}
        <div className="relative border-2 border-gray-500 rounded-lg overflow-hidden">
          <Image
            src="/image/c2.svg" // Replace with your image path
            alt="Food Item 2"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Food Item 3 */}
        <div className="relative border-2 border-gray-500 rounded-lg overflow-hidden">
          <Image
            src="/image/c3.svg" // Replace with your image path
            alt="Food Item 3"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Food Item 4 */}
        <div className="relative border-2 border-yellow-500 rounded-lg overflow-hidden">
          <Image
            src="/image/c4.svg" // Replace with your image path
            alt="Food Item 4"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Food Item 5 */}
        <div className="relative border-2 border-gray-500 rounded-lg overflow-hidden">
          <Image
            src="/image/c5.svg" // Replace with your image path
            alt="Food Item 5"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Food Item 6 */}
        <div className="relative border-2 border-gray-500 rounded-lg overflow-hidden">
          <Image
            src="/image/c6.svg" // Replace with your image path
            alt="Food Item 6"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="text-center mt-10 px-4 sm:px-8 lg:px-16">
        <h3 className="text-2xl font-bold text-yellow-400">
          Extra Ordinary Taste And Experienced
        </h3>
        <p className="text-gray-300 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our
          wide variety of dishes and enjoy the extraordinary taste with
          experienced chefs.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          {/* Buttons */}
          <Link href="/fast-food">
            <div className="px-4 py-2 bg-yellow-500 text-black rounded-md cursor-pointer hover:bg-yellow-400">
              Fast Food
            </div>
          </Link>
          <Link href="/lunch">
            <div className="px-4 py-2 bg-yellow-500 text-black rounded-md cursor-pointer hover:bg-yellow-400">
              Lunch
            </div>
          </Link>
          <Link href="/dinner">
            <div className="px-4 py-2 bg-yellow-500 text-black rounded-md cursor-pointer hover:bg-yellow-400">
              Dinner
            </div>
          </Link>
        </div>
        <p className="mt-4 text-yellow-400 font-semibold">30+ Years Experienced</p>
      </div>
    </div>
  );
};

export default FoodMenu;
