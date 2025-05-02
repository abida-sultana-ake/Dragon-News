import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className='space-y-5'>
                <button className='btn btn-secondary btn-outline w-full'><FcGoogle size={24} /> Login with Google</button>
                <button className='btn btn-primary btn-outline w-full'><FaSquareGithub size={24} /> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;