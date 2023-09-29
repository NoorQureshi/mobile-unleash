import React from 'react';
import { FaBatteryEmpty, FaMicrochip, FaCalendarAlt, FaDesktop, FaDatabase, FaMobile } from 'react-icons/fa';

const HighlightedSpecs = ({ phone }) => {
    return (
        <div className="flex-1 flex flex-col items-center space-y-4">
            {[
                { icon: FaBatteryEmpty, title: 'Battery', data: phone.battery.capacity },
                // { icon: FaMicrochip, title: 'CPU', data: phone.performance.cpu },
                // { icon: FaCalendarAlt, title: 'Release Date', data: phone.release_date },
                { icon: FaDesktop, title: 'Display', data: phone.display.size + ' - ' + phone.display.refresh_rate},
                // { icon: FaDatabase, title: 'Storage', data: phone.storage.capacity },
                { icon: FaMobile, title: 'OS', data: phone.hardware.os },
            ].map((spec, index) => (
                <div key={index} className="bg-[#fbfbfb] p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out" style={{ width: '188px' }}>
                    <div className="flex items-center">
                        <div className="flex flex-col justify-center mr-2">
                            <spec.icon style={{ fontSize: '26px', color: '#7FB3D5' }} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#333' }}>{spec.title}</span>
                            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#333' }}>{spec.data}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HighlightedSpecs;
