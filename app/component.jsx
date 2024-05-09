import { useEffect, useState } from 'react';

export default function Component() {
  const [dealershipName, setDealershipName] = useState('our dealership');

useEffect(() => {
  const dealershipMap = {
    'abcmotors.com': 'ABC Motors',
    'xyzautos.com': 'XYZ Autos',
    'updatingspecials2024.vercel.app': 'It Worked Motors',
    'jsfiddle.net': 'JSFiddle Motors Inc.',
  };

  const currentHost = window.location.hostname;
  const defaultName = 'Our Dealership'; // Default name if no match is found

  setDealershipName(dealershipMap[currentHost] || defaultName);
}, []);


  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 dark:bg-gray-950">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <CarIcon className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-50">Coming Soon: Exciting New Offers!</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Our monthly specials at {dealershipName} are being updated with the latest deals. Check back soon for amazing offers on new vehicles!
        </p>
      </div>
    </div>
  );
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}
