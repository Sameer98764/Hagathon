import Image from 'next/image';
import Link from 'next/link';

const ChefInfo = () => {
  return (
    <div className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-extrabold text-white mb-8 flex flex-col justify-center items-center">Meet Our Chef</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="image/o1.svg"
                alt="Chef 1"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Chef 1</h3>
              <p className="text-gray-600">Executive Chef</p>
              <Link href="/chef1">
                <Link className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4" href={''}>
                  Learn More
                </Link>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="image/o2.svg"
                alt="Chef 2"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Chef 2</h3>
              <p className="text-gray-600">Sous Chef</p>
              <Link href="/chef2">
                <Link className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4" href={''}>
                  Learn More
                </Link>
              </Link>
            </div>
          </div>
          {/* Add more chef cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;