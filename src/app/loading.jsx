import React from 'react';
import { DotLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <DotLoader color="#244D3F"/>
        </div>
    );
};

export default loading;