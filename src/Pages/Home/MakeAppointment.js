import React from 'react';
import doctor from '../../assets/images/doctor.png'
import Button from './Button';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
        return (
                <section style={{
                        background: `url(${appointment})`
                }}
                        className='flex justify-center items-center pt-32'>
                        <div className='flex-1'>
                                <img className='mt-[-300px] hidden lg:block' src={doctor} alt="" />
                        </div>
                        <div className='flex-1 px-5'>
                                <h3 className='text-primary font-bold text-xl text-white'>Appointment</h3>
                                <h2 className='font-bold text-3xl py-5 text-white'>Make an appointment Today</h2>
                                <p className='text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                                <Button>GET STARTED</Button>
                        </div>
                </section>
        );
};

export default MakeAppointment;