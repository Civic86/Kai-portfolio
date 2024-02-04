import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  skill: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, skill, description, href }) => {
  return (
    <Link href={href}>
      <div className="max-w-[400px] rounded overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
        <Image src={imageUrl} alt={title} width={400} height={250} objectFit="cover" className="w-full h-[250px] object-cover bg-blue-100" />
        <div className="px-6 py-4 bg-white">
          <div className="font-bold text-xl mb-2 text-black">{title}</div>
          <p className="text-gray-500">{skill}</p>
          <p className="text-base text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
