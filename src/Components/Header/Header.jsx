import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div className='mt-12 px-4'>
           <div className='flex flex-col items-center gap-4 justify-center lg:justify-start lg:mx-auto max-w-6xl w-full'>
            <img  src="/src/assets/logo.png" alt="logo" />
            <p className='text-gray-600'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-gray-600' >{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
           </div>
        </div>
    );
};

export default Header;