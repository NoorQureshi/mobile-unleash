// components/PhonesByBrand.js

function PhonesByBrand({ phones, brand }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 mt-4 text-left">Phones by {brand}</h2>
            <div className="flex flex-wrap gap-4 font-sans">
                {phones && phones.map((phone) => (
                    <div key={phone.name} className="w-full p-3" style={{ width: '150px' }}>
                        <div className="bg-white transition-shadow duration-300 hover:shadow-xl overflow-hidden">
                            <a href={`/phones/${phone.slug}/`}>
                                {/* <div className="relative">
                                    <img className="w-full h-40 object-contain" src={phone.image} alt={phone.name} />
                                </div> */}
                            </a>
                            <div className="p-4 text-center">
                                <h5 className="mb-1 text-md font-semibold leading-tight text-gray-800">
                                    <a href={`/phones/${phone.slug}/`} className="hover:underline">{phone.name}</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhonesByBrand;
