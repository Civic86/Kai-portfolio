import Image from 'next/image';
import Link from 'next/link';

interface WorkProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const WorkCard: React.FC<WorkProps> = ({ title, description, imageUrl, href }) => {
  return (
    <div className="grid grid-rows-auto bg-yellow-100 rounded-lg overflow-hidden shadow-lg">
      <Link href={href} passHref>
        <div className="cursor-pointer h-32">
          <Image src={imageUrl} alt={title} width={700} height={1} objectFit="cover" />
        </div>
      </Link>
      <div className="p-6">
        <div>
          <Link href={href} passHref>
            <h3 className="text-2xl font-semibold mb-2 cursor-pointer text-blue-500">{title}</h3>
          </Link>
          <p className="text-base text-blue-500">{description}</p>
        </div>
        <Link href={href} passHref>
          <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Learn more</span>
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
