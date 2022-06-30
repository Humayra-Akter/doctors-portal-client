import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
        const [services, setServices] = useState([]);
        const [treatment, setTreatment] = useState(null);

        useEffect(() => {
                fetch('http://localhost:5000/service')
                        .then(res => res.json())
                        .then(data => setServices(data))
        }, [])
        return (
                <div>
                        <h3 className='text-xl text-center text-secondary text-bold my-12'>Available Services on {format(date, 'pp')}</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                                {
                                        services.map(service => <Service
                                                key={service._id}
                                                service={service}
                                                setTreatment={setTreatment}
                                        ></Service>)
                                }
                        </div>
                        {treatment && <BookingModal
                                date={date}
                                treatment={treatment}
                                setTreatment={setTreatment}
                        ></BookingModal>}
                </div>
        );
};

export default AvailableAppointments;