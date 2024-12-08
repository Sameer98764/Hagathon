import Image from 'next/image';
import Link from 'next/link';

const FoodBlog: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Link href="/latest-news">
          <Image
            src="/image/L1.svg"
            alt="Cheeseburger"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">Cheeseburger</h3>
            <p className="text-gray-600">A classic cheeseburger with all the fixings.</p>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Link href="/latest-news">
          <Image
            src="/image/L2.svg"
            alt="Pizza"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">Pizza</h3>
            <p className="text-gray-600">A delicious pepperoni pizza with a crispy crust.</p>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Link href="/latest-news">
          <Image
            src="/image/L3.svg"
            alt="Sandwich"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">Sandwich</h3>
            <p className="text-gray-600">A hearty sandwich with fresh ingredients.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FoodBlog;