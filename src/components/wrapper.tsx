import React from 'react';

type WrapperCenter = {
    children: React.ReactNode;
};

const WrapperCenter: React.FC<WrapperCenter> = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='w-full max-w-4xl px-4'>{children}</div>
        </div>
    )
}

export default WrapperCenter;