import Image from 'next/image';


export default function Classes ({ yogi, heading, description }) {
    return (
      <div className="relative overflow-hidden transition duration-200 rounded shadow-lg hover:-translate-y-2">
      <Image
        className="object-cover w-full"
        src={yogi}
        alt="girl doing yoga pose"
        width="240"
        height="216"
        loading="lazy"
      />
      <div className="absolute bg-accent">
        <h3 className="text-lg font-bold text-gray-100">{heading}</h3>
        <p className="text-sm md:text-base">
         {description}
        </p>
      </div>
    </div>
    );
  }



