import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from 'react-icons/ri';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-9xl font-bold text-[#244D3F]'>404</h2>
            <p className='text-2xl mt-3 font-medium'>Page Not Found</p>
            <Link href={'/'}>
              <button className="btn bg-[#244D3F] text-white mt-5">
                <RiHome2Line/> Back to home
              </button>
            </Link>
        </div>
    );
};

export default ErrorPage;