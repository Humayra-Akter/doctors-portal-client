import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../assets/images/bg.png';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

        return (
                <div style={{
                        background: `url(${bg})`,
                        backgroundSize: 'cover'
                }} className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='dentist chair' />
                                <div>
                                        <DayPicker
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                        />
                                        <p>You have selected : {format(date, 'PP')}</p>
                                </div>
                        </div>
                </div>
        );
};

export default AppointmentBanner;