import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
        const reviews = [
                {
                        _id: 1,
                        name: "Winson Herry",
                        city: "California",
                        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
                        img: people1
                },
                {
                        _id: 2,
                        name: "Micheal Jerry",
                        city: "California",
                        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
                        img: people2
                },
                {
                        _id: 3,
                        name: "Erikson Covery",
                        city: "California",
                        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
                        img: people3
                }
        ]

        return (
                <section className='my-28'>
                        <div className='flex justify-between'>
                                <div>
                                        <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                                        <h2 className='text-3xl'>What Our Patients Says</h2>
                                </div>
                                <div>
                                        <img className='w-24 lg:w-48' src={quote} alt="" />
                                </div>
                        </div>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {
                                        reviews.map(review => <Review
                                                key={review._id}
                                                review={review}
                                        ></Review>)
                                }
                        </div>
                </section>
        );
};

export default Testimonials;