import { FaCompass, FaThLarge, FaUser } from 'react-icons/fa';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-2 sm:hidden md:hidden z-50">
      <div className="flex flex-col items-center text-gray-700">
        <FaCompass className="text-xl" />
        <span className="text-xs mt-1">Explore</span>
      </div>
      <div className="flex flex-col items-center text-gray-700">
        <FaThLarge className="text-xl" />
        <span className="text-xs mt-1">Categories</span>
      </div>
      <div className="flex flex-col items-center text-gray-700">
        <FaUser className="text-xl" />
        <span className="text-xs mt-1">Account</span>
      </div>
    </div>
  );
}
