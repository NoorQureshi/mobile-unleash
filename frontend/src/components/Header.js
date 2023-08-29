import { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function Header() {
  const [compareCount, setCompareCount] = useState(0);

  useEffect(() => {
    const compareList = localStorage.getItem('compareList');
    if (compareList) {
      const phoneIds = JSON.parse(compareList);
      setCompareCount(phoneIds.length);
    }
  }, []);

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto text-white text-xl flex justify-between items-center">
        <a href="/">Mobile Unleash</a>
        <div className="flex items-center">
          <a href="/compare" className="flex items-center">
            <i className="fa fa-exchange"></i>
            {compareCount > 0 && (
              <span className="bg-red-500 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center ml-1">
                {compareCount}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}
