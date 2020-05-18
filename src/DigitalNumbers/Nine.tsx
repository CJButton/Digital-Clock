import React from 'react';

const Nine = () => {
    return (
        <div className='digital-nine'>
            <div className='top-half'>
                <div className='top' />
                <div className='left-and-right'>
                    <div className='left' />
                    <div className='right' />
                </div>
            </div>
            <div className='center-top' />
            <div className='center-bottom' />
            <div className='bottom-half'>
                <div className='right' />
            </div>
        </div>
    );
};

export default Nine;