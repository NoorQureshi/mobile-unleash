// components/Brands.js
import Link from 'next/link'; // Import the Link component

export default function Brands() {
    const brands = [
        { name: 'Apple', logo: 'https://www.mobileunleash.com/wp-content/uploads/2020/08/apple-1-150x150.jpeg' },
        { name: 'Samsung', logo: 'https://www.mobileunleash.com/wp-content/uploads/2020/08/samsung.jpeg' },
        { name: 'Google', logo: 'https://www.mobileunleash.com/wp-content/uploads/2020/08/google.jpeg' },
        { name: 'Huawei', logo: 'https://www.mobileunleash.com/wp-content/uploads/2020/08/Huawei.jpeg' },
        { name: 'OnePlus', logo: 'https://www.mobileunleash.com/wp-content/uploads/2020/08/OnePlus-1024x1024.jpeg' },
        { name: 'LG', logo: 'https://www.mobileunleash.com/wp-content/uploads/2020/08/LG.jpeg' },
        // Add more brands here
    ];

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Most Popular Manufacturers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {brands.map((brand, idx) => (
                    <div key={idx} className="flex justify-center">
                        <a href={`/brands/${brand.name}`}> {/* Add the Link component here */}
                                <img className="w-12 h-12 cursor-pointer" src={brand.logo} alt={brand.name} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
