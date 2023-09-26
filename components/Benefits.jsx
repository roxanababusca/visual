import Image from 'next/image';


export default function Benefits ({icon, heading, description}) {
    return (
      <div className="border-accent hover:-translate-y-2">
      <div>
          <Image
          className="object-cover"
          src={icon}
          alt="yoga pose"
          w="20"
          h="30"
          loading="lazy"
        />
        <h3 className="font-semibold text-left">{heading}</h3>
        <p> {description} </p>
      </div>
    </div>
    );
  };


