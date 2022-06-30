import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
        const services = [
                {
                        _id: 1,
                        name: "Fluoride Treatment",
                        img: fluoride,
                        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                },
                {
                        _id: 2,
                        name: "Cavity Filling",
                        img: cavity,
                        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                },
                {
                        _id: 3,
                        name: "Teeth Whitening",
                        img: whitening,
                        description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
                }

        ]

        return (
                <div className='my-28'>
                        <div className='text-center'>
                                <h3 className='text-primary font-bold text-xl'>OUR SERVICES</h3>
                                <h2 className='text-4xl'>Services We Provide</h2>
                        </div>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                                {
                                        services.map(service => <Service
                                                key={services._id}
                                                service={service}
                                        ></Service>)
                                }
                        </div>
                </div>
        );
};

export default Services;