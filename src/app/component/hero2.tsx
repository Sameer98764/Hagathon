import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-black text-white px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-yellow-500 font-semibold text-lg">About us</h3>
          <h2 className="text-4xl font-bold my-4">
            We Create the best
            <br />
            <span className="text-yellow-500">foody product</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Uma, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis est
            vitae massa. Tracus nisl, et ac dapibus sit et velit in consequat.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
            <li>Lucus nisl, et ac dapibus sit et velit in consequat.</li>
            <li>Quisque diam pellentesque bibendum non dui volutpat fringilla.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <Link href="/about">
            <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition">
              Read More
            </button>
          </Link>
        </div>

        {/* Right Content: Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Image */}
          <div className="relative w-full h-40 md:h-52 overflow-hidden rounded-lg">
            <Image
              src="/image/w1.svg" // Replace with the correct image path
              alt="Food Product 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Bottom Left Image */}
          <div className="relative w-full h-40 md:h-52 overflow-hidden rounded-lg">
            <Image
              src="/image/w2.svg" // Replace with the correct image path
              alt="Food Product 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Bottom Right Image */}
          <div className="relative w-full h-40 md:h-52 overflow-hidden rounded-lg col-span-2">
            <Image
              src="/image/w3.svg" // Replace with the correct image path
              alt="Food Product 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
