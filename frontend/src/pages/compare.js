import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import CompareSpecsCon from '@/components/Compare/CompareSpecsCon';
import { fetchPhoneBySlug, fetchSimilarSpecs } from '@/pages/api/api';
import { motion, AnimatePresence } from 'framer-motion';  // Import Framer Motion
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
            setSimilarSpecs([]);  // Clear the similar specs if checkbox is unchecked
        }
    };

    const removePhoneFromCompare = (idToRemove) => {
        const updatedPhones = phonesToCompare.filter(phone => phone.id !== idToRemove);
        setPhonesToCompare(updatedPhones);

        const updatedIds = updatedPhones.map(phone => phone.id);
        localStorage.setItem('compareList', JSON.stringify(updatedIds));
    };

    return (
        <div className="bg-custom-gray min-h-screen">
            <Header />
            <motion.div 
                className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md" 
                style={{ maxWidth: '60%' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-wrap justify-between items-start p-8 mb-12">
                    <motion.label 
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.input 
                            type="checkbox" 
                            className="form-checkbox h-5 w-5 text-blue-600" 
                            onChange={HandleHighlightSimilar} 
                            checked={highlightSimilar}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        />
                        <span className="ml-2 text-gray-700">Highlight Similar Specs</span>
                    </motion.label>
                    <CompareSpecsCon 
                        phones={phonesToCompare} 
                        similarSpecs={similarSpecs} 
                        highlightSimilar={highlightSimilar} 
                        removePhone={removePhoneFromCompare} 
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ComparePage;
