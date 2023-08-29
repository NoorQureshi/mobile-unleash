import React, { useState } from 'react';
import PhoneImageAndDetails from '@/components/PhoneDetails/PhoneImageAndDetails';
import HighlightedSpecs from '@/components/PhoneDetails/HighlightedSpecs';
import Overview from '@/components/PhoneDetails/Overview';
import SpecificationsContainer from '@/components/PhoneDetails/SpecsContainer';
import "@/styles/PhoneDetails.css"; // Assuming you'll add a PhoneDetails.css file for custom styles

const PhoneDetails = ({ phone }) => {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div>

      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md" style={{ maxWidth: '60%' }}>      
        <div className="flex flex-wrap justify-between items-start p-8 mb-12">
          <PhoneImageAndDetails phone={phone} />
          <HighlightedSpecs phone={phone} />
          <Overview />
        </div>
      </div>
      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md" style={{ maxWidth: '60%' }}> 
        <SpecificationsContainer phone={phone} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default PhoneDetails;
