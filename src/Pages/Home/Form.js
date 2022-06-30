import React from 'react';
import appointment from '../../assets/images/appointment.png';
import Button from './Button';

const Form = () => {
        return (
                <div className='my-28 text-center' style={{
                        background: `url(${appointment})`,
                        backgroundSize: 'cover'
                }}>
                        <h4 className='text-primary font-bold'>Contact Us</h4>
                        <h2 className='text-white text-3xl'>Stay connected with us</h2>
                        <form>
                                <input className='w-96 h-12 rounded-lg mt-5 mb-5 pl-5' type="email" name="email" placeholder='Email Address' id="" />
                                <br />
                                <input className='w-96 h-12 rounded-lg pl-5' type="text" name="subject" placeholder='Subject' id="" />
                                <br />
                                <input className='w-96 h-32 rounded-lg mt-5 mb-5 pl-5' type="text" name="Your message" placeholder='Your message' id="" />
                        </form>
                        <Button className='mb-5'>Submit</Button>
                </div>
        );
};

export default Form;