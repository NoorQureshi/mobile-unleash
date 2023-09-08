import 'font-awesome/css/font-awesome.min.css';

function LatestPhones({ phones }) {
    return (
        <div>
            <h2 className="p-4 text-xl font-semibold mb-4">Latest Phones</h2>
            <div className="flex flex-wrap gap-4 font-sans">
                {phones && phones.map((phone, index) => (
                    <div key={phone.name} className="w-full p-3" style={{ width: '150px' }}>
                        <div className="bg-white transition-shadow duration-300 hover:shadow-md overflow-hidden relative">
                            <a href={`/phones/${phone.slug}/`} className="block">
                                <div className="relative">
                                    <img className="w-full h-40 object-contain" src={phone.image} alt={phone.name} />
                                </div>
                            </a>
                            <div className="p-4 text-center">
                                <h5 className="mb-1 text-md font-semibold leading-tight text-gray-800">
                                    <a href={`/phones/${phone.slug}/`} className="hover:underline">{phone.name}</a>
                                </h5>
                                <div className="mt-2">
                                    <i className="fa fa-exchange cursor-pointer" style={{ opacity: 0.5 }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestPhones;
