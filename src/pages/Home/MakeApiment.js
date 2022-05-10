import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeApiment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center mt-[100px]'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-170px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-4xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary-500">Get Started</button>
            </div>
        </section>
    );
};

export default MakeApiment;