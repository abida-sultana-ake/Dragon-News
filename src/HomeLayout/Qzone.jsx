import React from 'react';
import playgroundImg from '../assets/playground.png';
import Swimming from '../assets/swimming.png';
import Class from '../assets/class.png';
import bg from '../assets/bg.png';
const Qzone = () => {
    return (
        <div className='bg-base-200 rounded-xl p-3'>
           <h1 className="font-semibold mb-5 m-5 text-xl text-gray-800">Q-Zone</h1> 
           <div className='space-y-5 p-5'>
            <img src={playgroundImg} alt="" />
            <img src={Swimming} alt="" />
            <img src={Class} alt="" />
            <img src={bg} alt="" />
           </div>
        </div>
    );
};

export default Qzone;
