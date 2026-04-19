'use client'

import ActivityCard from '@/components/timeline/ActivityCard';
import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';

const TimelinePage = () => {
    const {timeline} = useContext(FriendContext)
    
    
    return (
        <div className='bg-[#F8FAFC] py-10 px-5'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-5xl font-bold'>Timeline</h2>
                <div className='mt-7 space-y-3'>
                    {
                        timeline.map((data, i) => <ActivityCard key={i} data={data}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;