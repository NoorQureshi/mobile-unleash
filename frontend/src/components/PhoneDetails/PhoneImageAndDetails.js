import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const PhoneImageAndDetails = ({ phone }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [isAddedToCompare, setIsAddedToCompare] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const compareList = localStorage.getItem('compareList');
        if (compareList && JSON.parse(compareList).includes(phone.id)) {
            setIsAddedToCompare(true);
        }
    }, [phone.id]);

    const handleCompareClick = () => {
        let compareList = localStorage.getItem('compareList');
        compareList = compareList ? JSON.parse(compareList) : [];

        if (!compareList.includes(phone.id)) {
            controls.start({
                scale: 1.1,
                transition: { duration: 0.1 }
            }).then(() => {
                controls.start({
                    scale: 1,
                    transition: { duration: 0.1 }
                });
            });

            compareList.push(phone.id);
            localStorage.setItem('compareList', JSON.stringify(compareList));
            setIsAddedToCompare(true);
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#333' }}>{phone.name}</h1>
            <span className="text-sm text-gray-500 mb-4" style={{ fontSize: '12px' }}>Add your review</span>
            <button onClick={() => setShowPopup(true)} className="mb-4 transform transition-transform duration-300 hover:scale-105">
                <img src={phone.image} alt={phone.name} className="object-cover cursor-pointer mx-auto w-1/2" />
            </button>
            <motion.button
                onClick={handleCompareClick}
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold uppercase"
                style={{ fontSize: '16px', fontFamily: '"Inter", sans-serif' }}
                animate={controls}
            >
                {isAddedToCompare ? "Added to Compare" : "Compare"}
            </motion.button>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
                    <div className="bg-white p-4 relative transition-all duration-300 ease-in-out">
                        <button onClick={() => setShowPopup(false)} className="absolute top-0 right-0 mt-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img src={phone.image} alt={phone.name} className="object-cover mx-auto max-h-[80vh] max-w-[90vw] transition-all duration-300 ease-in-out" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhoneImageAndDetails;
