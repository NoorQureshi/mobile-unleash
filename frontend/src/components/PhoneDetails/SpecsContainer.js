import React from 'react';

const SpecificationsContainer = ({ phone, activeTab, setActiveTab }) => {
    console.log("Log ==> ", phone);

    const excludedKeys = ['id', 'phone'];

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Specifications: <span className="text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>{phone.name}</span></h2>

            {/* Tab Content */}
            <div className="mt-8 grid grid-cols-2 gap-8">
                {[
                    { title: 'Display', specs: phone.display },
                    { title: 'Hardware', specs: phone.hardware },
                    { title: 'Battery', specs: phone.battery },
                    { title: 'Camera', specs: phone.camera },
                    { title: 'Design', specs: phone.design },
                    { title: 'Cellular', specs: phone.cellular },
                    { title: 'Multimedia', specs: phone.multimedia },
                    { title: 'Connectivity & Features', specs: phone.connectivity_and_features },
                ].map((section, index) => (
                    <div key={index} className="spec-section bg-white p-4 rounded-lg">
                        <h2 className="spec-title text-lg font-semibold mb-2 text-white bg-violet-500 p-2 rounded" style={{ fontFamily: 'Inter, sans-serif' }}>{section.title}</h2>
                        <table className="min-w-full">
                            <tbody>
                            {Object.keys(section.specs).filter(key => !excludedKeys.includes(key)).map((key, i) => (
                                    <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} hover:bg-gray-300`}>
                                        <td className="px-4 py-2 border-b text-gray-800" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold', fontSize: '14px' }}>{key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}</td>
                                        <td className="px-4 py-2 border-b text-gray-700" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>{section.specs[key]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecificationsContainer;
