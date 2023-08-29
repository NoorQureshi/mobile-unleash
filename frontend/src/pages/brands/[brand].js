// pages/brands/[brand].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchPhonesByBrandName } from '@/pages/api/api';
import Header from '@/components/Header';
import PhonesByBrand from '@/components/Brands/PhonesByBrand'; // Import the new component
import '@/app/globals.css'

const BrandPhones = () => {
  const router = useRouter();
  const { brand } = router.query;
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    if (brand) {
      fetchPhonesByBrandName(brand)
        .then(fetchedPhones => {
          setPhones(fetchedPhones);
        })
        .catch(error => {
          console.error("Failed to fetch phones by brand:", error);
        });
    }
  }, [brand]);

  return (
    <div className="bg-custom-gray min-h-screen">
      <Header />
      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        <PhonesByBrand phones={phones} brand={brand} /> {/* Use the new component */}
      </div>
    </div>
  );
};

export default BrandPhones;
