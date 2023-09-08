import { useState } from 'react';
import '@/app/globals.css'

const Dashboard = () => {
    const [formData, setFormData] = useState({
        'Phone Name:': '',
        'Brand ID:': '',
        // Display
        'Size:': '',
        'Resolution:': '',
        'Technology:': '',
        'Refresh rate:': '',
        'Screen-to-body:': '',
        'Features:': '',
        // Hardware
        'System chip:': '',
        'Processor:': '',
        'GPU:': '',
        'RAM:': '',
        'Internal storage:': '',
        'Storage expansion:': '',
        'Device type:': '',
        'OS:': '',
        // Battery
        'Capacity:': '',
        'Charging:': '',
        'Max charge speed:': '',
        // Camera
        'Rear:': '',
        'Main camera:': '',
        'Specifications:': '',
        'Second camera:': '',
        'Third camera:': '',
        'Video recording:': '',
        'Front:': '',
        // Design
        'Dimensions:': '',
        'Weight:': '',
        'Materials:': '',
        'Resistance:': '',
        'Biometrics:': '',
        'Keys:': '',
        'Colors:': '',
        // Cellular
        '5G:': '',
        '4G (FDD):': '',
        '4G (TDD):': '',
        '3G:': '',
        'Data Speed:': '',
        'Dual SIM:': '',
        'SIM type:': '',
        // Multimedia
        'Speakers:': '',
        'Screen mirroring:': '',
        'Additional microphone(s):': '',
        // Connectivity & Features
        'Bluetooth:': '',
        'Wi-Fi:': '',
        'USB:': '',
        'Features:': '',
        'Location:': '',
        'Sensors:': '',
        'Other:': ''
    });

    const [url, setUrl] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };



    const handleScrape = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/phones/scrape/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });
            
            const data = await response.json();
            console.log("Received data:", data);  // Debugging line
    
            if (response.ok) {
                // Flatten the scraped data to match the formData structure
                const flattenedData = {};
                const phoneDetails = data.scraped_data[0];  // First element contains the details
                const phoneName = data.scraped_data[1];  // Second element contains the name
    
                Object.keys(phoneDetails).forEach(section => {
                    Object.keys(phoneDetails[section]).forEach(key => {
                        flattenedData[key] = phoneDetails[section][key];
                    });
                });
                
                // Update formData with the scraped data
                setFormData(prevState => ({ ...prevState, ...flattenedData }));
                console.log("Updated formData:", formData);  // Debugging line
    
                // Do something with phoneName if needed
                console.log("Phone Name:", phoneName);
    
            } else {
                console.error("Failed to scrape data", data);
            }
        } catch (error) {
            console.error("There was an error scraping the data", error);
        }
    };

    // const handleScrape = async () => {
    //     try {
    //         const response = await fetch('http://127.0.0.1:8000/api/phones/scrape/', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ url })
    //         });
    
    //         const data = await response.json();
    //         console.log("Received data:", data);  // Log the received data
    
    //         if (response.ok) {
    //             // Flatten the scraped data to match the formData structure
    //             const flattenedData = {};
    //             Object.keys(data.scraped_data).forEach(section => {
    //                 Object.keys(data.scraped_data[section]).forEach(key => {
    //                     flattenedData[key] = data.scraped_data[section][key];
    //                 });
    //             });
    
    //             // Extract the phone name from the scraped data
    //             const phoneName = data.scraped_data[1];  // Modify this line based on the actual structure
    
    //             // Update formData with the scraped data and phone name
    //             setFormData(prevState => ({ ...prevState, ...flattenedData, 'Phone Name': phoneName }));
    //         } else {
    //             console.error("Failed to scrape data", data);
    //         }
    //     } catch (error) {
    //         console.error("There was an error scraping the data", error);
    //     }
    // };
    
    
       

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);

        // Structure the data to match the Django serializers
        const structuredData = {
            "name": formData['Phone Name:'],
            "brand": formData['Brand ID:'],
            "display": {
                "size": formData['Size:'],
                "resolution": formData['Resolution:'],
                "technology": formData['Technology:'],
                "refresh_rate": formData['Refresh rate:'],
                "screen_to_body_ratio": formData['Screen-to-body:'],
                "features": formData['Features:']
            },
            "hardware": {
                "system_chip": formData['System chip:'],
                "processor": formData['Processor:'],
                "gpu": formData['GPU:'],
                "ram": formData['RAM:'],
                "internal_storage": formData['Internal storage:'],
                "storage_expansion": formData['Storage expansion:'],
                "device_type": formData['Device type:'],
                "os": formData['OS:']
            },
            "battery": {
                "capacity": formData['Capacity:'],
                "charging": formData['Charging:'],
                "max_charge_speed": formData['Max charge speed:']
            },
            "camera": {
                "rear": formData['Rear:'],
                "main_camera": formData['Main camera:'],
                "specifications": formData['Specifications:'],
                "second_camera": formData['Second camera:'],
                "third_camera": formData['Third camera:'],
                "video_recording": formData['Video recording:'],
                "front": formData['Front:']
            },
            "design": {
                "dimensions": formData['Dimensions:'],
                "weight": formData['Weight:'],
                "materials": formData['Materials:'],
                "resistance": formData['Resistance:'],
                "biometrics": formData['Biometrics:'],
                "keys": formData['Keys:'],
                "colors": formData['Colors:']
            },
            "cellular": {
                "five_g": formData['5G:'],
                "four_g_fdd": formData['4G (FDD):'],
                "four_g_tdd": formData['4G (TDD):'],
                "three_g": formData['3G:'],
                "data_speed": formData['Data Speed:'],
                "dual_sim": formData['Dual SIM:'],
                "sim_type": formData['SIM type:']
            },
            "multimedia": {
                "headphones": formData['Speakers:'],  // Assuming 'Speakers:' is a typo and should be 'Headphones:'
                "speakers": formData['Speakers:'],
                "screen_mirroring": formData['Screen mirroring:'],
                "additional_microphones": formData['Additional microphone(s):']
            },
            "connectivity_and_features": {
                "bluetooth": formData['Bluetooth:'],
                "wifi": formData['Wi-Fi:'],
                "usb": formData['USB:'],
                "features": formData['Features:'],
                "location": formData['Location:'],
                "sensors": formData['Sensors:'],
                "other": formData['Other:']
            }
        };
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/phones/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(structuredData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Data saved:", data);
            } else {
                const data = await response.json();
                console.error("Failed to save data", data);
            }
        } catch (error) {
            console.error("There was an error saving the data", error);
        }
    };
    

    const renderInputField = (name) => (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{name}</label>
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" 
                name={name} 
                placeholder={name} 
                value={formData[name]} 
                onChange={handleInputChange} 
            />
        </div>
    );


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Submit Phone Data</h1>
            <div className="mb-4">
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" 
                    placeholder="Enter URL to scrape" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                />
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={handleScrape}
                >
                    Scrape Data
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <h2 className='text-xl font-bold mb-2'>General Details</h2>
                {renderInputField('Phone Name:')}
                {renderInputField('Brand ID:')}
                <h2 className="text-xl font-bold mb-2">Display Details</h2>
                {renderInputField('Size:')}
                {renderInputField('Resolution:')}
                {renderInputField('Technology:')}
                {renderInputField('Refresh rate:')}
                {renderInputField('Screen-to-body:')}
                {renderInputField('Features:')}
                
                <h2 className="text-xl font-bold mb-2">Hardware Details</h2>
                {renderInputField('System chip:')}
                {renderInputField('Processor:')}
                {renderInputField('GPU:')}
                {renderInputField('RAM:')}
                {renderInputField('Internal storage:')}
                {renderInputField('Storage expansion:')}
                {renderInputField('Device type:')}
                {renderInputField('OS:')}
                
                <h2 className="text-xl font-bold mb-2">Battery Details</h2>
                {renderInputField('Capacity:')}
                {renderInputField('Charging:')}
                {renderInputField('Max charge speed:')}
                
                <h2 className="text-xl font-bold mb-2">Camera Details</h2>
                {renderInputField('Rear:')}
                {renderInputField('Main camera:')}
                {renderInputField('Specifications:')}
                {renderInputField('Second camera:')}
                {renderInputField('Third camera:')}
                {renderInputField('Video recording:')}
                {renderInputField('Front:')}
                
                <h2 className="text-xl font-bold mb-2">Design Details</h2>
                {renderInputField('Dimensions:')}
                {renderInputField('Weight:')}
                {renderInputField('Materials:')}
                {renderInputField('Resistance:')}
                {renderInputField('Biometrics:')}
                {renderInputField('Keys:')}
                {renderInputField('Colors:')}
                
                <h2 className="text-xl font-bold mb-2">Cellular Details</h2>
                {renderInputField('5G:')}
                {renderInputField('4G (FDD):')}
                {renderInputField('4G (TDD):')}
                {renderInputField('3G:')}
                {renderInputField('Data Speed:')}
                {renderInputField('Dual SIM:')}
                {renderInputField('SIM type:')}
                
                <h2 className="text-xl font-bold mb-2">Multimedia Details</h2>
                {renderInputField('Speakers:')}
                {renderInputField('Screen mirroring:')}
                {renderInputField('Additional microphone(s):')}
                
                <h2 className="text-xl font-bold mb-2">Connectivity & Features</h2>
                {renderInputField('Bluetooth:')}
                {renderInputField('Wi-Fi:')}
                {renderInputField('USB:')}
                {renderInputField('Features:')}
                {renderInputField('Location:')}
                {renderInputField('Sensors:')}
                {renderInputField('Other:')}
                
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Dashboard;