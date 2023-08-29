import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import CompareSpecsCon from '@/components/Compare/CompareSpecsCon'; // Import the new component
import { fetchPhoneBySlug, fetchSimilarSpecs } from '@/pages/api/api';
import '@/app/globals.css';

const ComparePage = () => {
    const [phonesToCompare, setPhonesToCompare] = useState([]);
    const [similarSpecs, setSimilarSpecs] = useState([]);
    const [highlightSimilar, setHighlightSimilar] = useState(false);

    useEffect(() => {
        const compareList = localStorage.getItem('compareList');
        if (compareList) {
            const phoneIds = JSON.parse(compareList);
            Promise.all(phoneIds.map(id => fetchPhoneBySlug(id)))
                .then(phones => {
                    setPhonesToCompare(phones);
                });
        }
    }, []);

    const HandleHighlightSimilar = (e) => {
        setHighlightSimilar(e.target.checked);
        if (e.target.checked) {
            const ids = phonesToCompare.map(phone => phone.id);
            if (ids.length >= 2) {
                fetchSimilarSpecs(ids[0], ids[1]).then(data => {
                    setSimilarSpecs(data);
                }).catch(error => {
                    console.error("Failed to fetch similar specs:", error);
                });
            }
        } else {
            setSimilarSpecs([]); // Clear the similar specs if checkbox is unchecked
        }
    };

    const removePhoneFromCompare = (idToRemove) => {
        const updatedPhones = phonesToCompare.filter(phone => phone.id !== idToRemove);
        setPhonesToCompare(updatedPhones)

        const updatedIds = updatedPhones.map(phone => phone.id);
        localStorage.setItem('compareList', JSON.stringify(updatedIds));
    };

    return (
        <div className="bg-custom-gray min-h-screen">
            <Header />
            <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md" style={{ maxWidth: '60%' }}>
                <div className="flex flex-wrap justify-between items-start p-8 mb-12">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={HandleHighlightSimilar} checked={highlightSimilar} />
                        <span className="ml-2 text-gray-700">Highlight Similar Specs</span>
                    </label>
                    <CompareSpecsCon phones={phonesToCompare} similarSpecs={similarSpecs} highlightSimilar={highlightSimilar} removePhone={removePhoneFromCompare} /> {/* Pass highlightSimilar */}
                </div>
            </div>
        </div>
    );
};

export default ComparePage;
