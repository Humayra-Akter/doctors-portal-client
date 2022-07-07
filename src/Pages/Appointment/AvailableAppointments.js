import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../../Pages/Shared/Loading';

const AvailableAppointments = ({ date }) => {
        const [treatment, setTreatment] = useState(null);
        const formattedDate = format(date, 'PP');
        const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
                fetch(`http://localhost:5000/available?date=${formattedDate}`)
                        .then(res => res.json()))
        if (isLoading) {
                return <Loading></Loading>
        }

        return (
                <div>
                        <h3 className='text-xl text-center text-secondary text-bold my-12'>Available Services on {format(date, 'PP')}</h3>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                                {
                                        services?.map(service => <Service
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
                                refetch={refetch}
                        ></BookingModal>}
                </div>
        );
};

export default AvailableAppointments;