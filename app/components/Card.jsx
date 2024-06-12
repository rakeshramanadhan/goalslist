import Image from 'next/image';

const getRandomColor = () => {
    const colors = [
      'bg-red-400',
      'bg-blue-400',
      'bg-green-400',
      'bg-yellow-400',
      'bg-indigo-400',
      'bg-purple-400',
      'bg-pink-400',
      'bg-gray-400',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
const Card = ({ title, code }) => {
    const randomColor = getRandomColor();
  return (
    <div className={`max-w-sm min-h-full rounded overflow-hidden shadow-lg ${randomColor}`}>
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{code}</div>
        <p className="text-gray-700 text-base">
          {title}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
  );
};

export default Card;