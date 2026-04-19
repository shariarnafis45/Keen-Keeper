'use client'

import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';

const TimelinePage = () => {
    const {} = useContext(FriendContext)
    
    return (
        <div className='bg-[#F8FAFC] py-10'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-5xl font-bold'>Timeline</h2>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;