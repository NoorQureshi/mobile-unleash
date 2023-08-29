import React from 'react';
import '@/app/globals.css';

const CompareSpecsCon = ({ phones, similarSpecs, highlightSimilar, removePhone }) => {
    const excludedKeys = ['id', 'phone'];

    return (
        <div className="flex">
            {phones.map((phone, phoneIndex) => (
                <div className="w-1/2 p-4 flex flex-col items-center">
                    {/* Add a remove button */}
                    <button onClick={() => removePhone(phone.id)} className="self-end bg-gray-400 text-white rounded-full p-1 mb-2 w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>

                    <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center">
                        {phone.name}
                    </h2>
                    {/* Display the image */}
                    {phone.image && (
                        <div className="flex justify-center mb-4">
                            <img src={phone.image} alt={`${phone.name} image`} className="w-48 h-48 object-contain" />
                        </div>
                    )}
                    {[
                        { title: 'Display', specs: phone.display },
                        { title: 'Camera', specs: phone.camera },
                        { title: 'Performance', specs: phone.performance },
                        { title: 'Battery', specs: phone.battery },
                        { title: 'Additional Features', specs: phone.additional_features },
                    ].map((section, index) => (
                        <div key={index} className="spec-section bg-white p-4 rounded-lg w-full">
                            <h2 className="spec-title text-lg font-semibold mb-2 text-white bg-violet-500 p-2 rounded">
                                {section.title}
                            </h2>
                            <table className="min-w-full">
                                <tbody>
                                    {Object.keys(section.specs).filter(key => !excludedKeys.includes(key)).map((key, i) => (
                                        <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} hover:bg-gray-300 ${highlightSimilar && similarSpecs && !similarSpecs[key] ? 'dimmed' : ''}`}>
                                            <td className="px-4 py-2 border-b text-gray-800">
                                                {key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}
                                                {similarSpecs && similarSpecs[key] && <span className="checkmark">✓</span>}
                                            </td>
                                            <td className="px-4 py-2 border-b text-gray-700">
                                                {section.specs[key]}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CompareSpecsCon;
