import React from 'react';

const Overview = () => {
    return (
        <div className="flex-1 flex flex-col items-start p-6 rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Overview</h2>
            <p className="text-left mb-6 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                This is a random description of the phone. It has many features that make it unique and stand out among its competitors.
            </p>

            <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-row items-center p-4 rounded-lg bg-gray-100 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <div>
                        <h3 className="text-lg font-semibold mb-2" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>Pros</h3>
                        <ul className="list-disc list-inside" style={{ color: '#333' }}>
                            <li>Great Battery Life</li>
                            <li>Amazing Display</li>
                            <li>Fast Performance</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row items-center p-4 rounded-lg bg-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    <div>
                        <h3 className="text-lg font-semibold mb-2" style={{ color: '#333', fontFamily: 'Inter, sans-serif' }}>Cons</h3>
                        <ul className="list-disc list-inside" style={{ color: '#333' }}>
                            <li>Expensive</li>
                            <li>Limited Storage Options</li>
                            <li>No Headphone Jack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
