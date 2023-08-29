import { useState } from 'react';
import '@/app/globals.css'

const Dashboard = () => {
    const [formData, setFormData] = useState({
        // Phone details
        brand: '',
        name: '',
        image: '',
        key_features: '',
        price: '',
        currency: '',
        where_to_buy: '',
        
        // Display details
        screen_size: '',
        screen_resolution: '',
        screen_quality: '',
        colors: '',
        
        // Camera details
        primary_camera: '',
        secondary_camera: '',
        photo_quality: '',
        video_quality: '',
        camera_special_features: '',

        // Performance details
        cpu: '',
        ram: '',
        speed: '',
        multitasking: '',

        // Storage details
        internal_storage: '',
        expandable_storage: '',

        // Battery details
        capacity: '',
        charging_speed: '',
        wireless_charging: '',

        // Additional Features
        water_resistance: false,
        operating_system: '',
        security_features: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    function renderTextField(field, index) {
        return (
            <input 
                key={index}
                className="border rounded w-full p-2"
                type="text"
                name={field}
                placeholder={capitalizeFirstLetter(field)}
                value={formData[field]}
                onChange={handleInputChange}
            />
        );
    }
    
    function renderTextarea(field, index) {
        return (
            <textarea 
                key={index}
                className="border rounded w-full p-2"
                name={field}
                placeholder={capitalizeFirstLetter(field)}
                value={formData[field]}
                onChange={handleInputChange}
            ></textarea>
        );
    }
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/phones/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // any other headers required by your backend
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("There was an error submitting your form", error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-2xl"> {/* Adjusted max-w-2xl for width */}
                <h1 className="text-2xl mb-6 font-bold">Submit Phone Data</h1>
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Fields for Phone details */}
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">Phone Details</h2>
                        <div className="space-y-4">
                            {['brand', 'name'].map(renderTextField)}
                            <input 
                                className="border rounded w-full p-2"
                                type="file"
                                name="image"
                                onChange={handleInputChange}
                            />
                            {['key_features', 'where_to_buy'].map(renderTextarea)}
                            {['price', 'currency'].map(renderTextField)}
                        </div>
                    </section>

                    {/* Fields for Display details */}
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">Display Details</h2>
                        <div className="space-y-4">
                            {['screen_size', 'screen_resolution', 'screen_quality', 'colors'].map(renderTextField)}
                        </div>
                    </section>

                    {/* Fields for Camera details */}
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">Camera Details</h2>
                        <div className="space-y-4">
                            {['primary_camera', 'secondary_camera', 'photo_quality', 'video_quality'].map(renderTextField)}
                            {['camera_special_features'].map(renderTextarea)}
                        </div>
                    </section>

                    {/* Fields for Performance details */}
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">Performance Details</h2>
                        <div className="space-y-4">
                            {['cpu', 'ram', 'speed', 'multitasking'].map(renderTextField)}
                        </div>
                    </section>

                    {/* Fields for Storage details */}
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">Storage Details</h2>
                        <div className="space-y-4">
                            {['internal_storage', 'expandable_storage'].map(renderTextField)}
                        </div>
                    </section>

                    {/* Fields for Battery details */}
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">Battery Details</h2>
                        <div className="space-y-4">
                            {['capacity', 'charging_speed'].map(renderTextField)}
                            <label className="inline-flex items-center">
                                <input 
                                    type="checkbox" 
                                    className="mr-2"
                                    name="wireless_charging" 
                                    checked={formData.wireless_charging} 
                                    onChange={handleCheckboxChange} 
                                />
                                Wireless Charging
                            </label>
                        </div>
                    </section>

                    {/* Fields for Additional Features */}
                    <section>
                        <h2 className="text-xl mb-4 font-semibold">Additional Features</h2>
                        <div className="space-y-4">
                            <label className="inline-flex items-center">
                                <input 
                                    type="checkbox" 
                                    className="mr-2"
                                    name="water_resistance" 
                                    checked={formData.water_resistance} 
                                    onChange={handleCheckboxChange} 
                                />
                                Water Resistance
                            </label>
                            {['operating_system', 'security_features'].map(renderTextField)}
                        </div>
                    </section>

                    <div className="mt-6">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Dashboard;