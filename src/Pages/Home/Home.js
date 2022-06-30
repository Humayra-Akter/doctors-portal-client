import React from 'react';
import Banner from './Banner';
import ExtraService from './ExtraService';
import Footer from '../Shared/Footer';
import Form from './Form';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
        return (
                <div>
                        <Banner></Banner>
                        <Info></Info>
                        <Services></Services>
                        <ExtraService></ExtraService>
                        <MakeAppointment></MakeAppointment>
                        <Testimonials></Testimonials>
                        <Form></Form>
                        <Footer></Footer>
                </div>
        );
};

export default Home;