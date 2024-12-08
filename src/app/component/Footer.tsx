import Image from 'next/image';
import Link from 'next/link';

const SupportPage = () => {
  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-orange-500 py-4 px-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white">Do You Need Our Support?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">About Us</h3>
            <ul className="list-disc pl-4 mt-4">
              <li>We are a team of experts</li>
              <li>Dedicated to helping our clients</li>
              <li>Providing top-notch support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Useful Links</h3>
            <ul className="list-disc pl-4 mt-4">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Help</h3>
            <ul className="list-disc pl-4 mt-4">
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/tutorials">Tutorials</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Recent Posts</h3>
            <div className="flex items-center mt-4">
              <Image src="image/c1.svg" alt="Post 1" width={50} height={50} className="rounded-full mr-4" />
              <div>
                <Link href="/post-1">Post 1</Link>
                <p className="text-gray-500 text-sm">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Image src="image/c2.svg" alt="Post 2" width={50} height={50} className="rounded-full mr-4" />
              <div>
                <Link href="/post-2">Post 2</Link>
                <p className="text-gray-500 text-sm">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;