import Image from 'next/image';
import Link from 'next/link';

const FoodComponent = () => {
  return (
    <div className="bg-black text-white py-8 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex-1">
            <Image
              src="/image/g1.svg"
              alt="Food Image"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold">We Document Every Food</h2>
            <p className="text-gray-300">
              Bean Process, until it is served.
            </p>
            <Link href="/menu" className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
              Explore Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodComponent;