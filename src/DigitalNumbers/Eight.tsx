import React from 'react';

const Eight = () => {
    return (
        <div className='digital-eight'>
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
                <div className='left-and-right'>
                    <div className='left' />
                    <div className='right' />
                </div>
                    <div className='bottom' />
            </div>
        </div>
    );
};

export default Eight;
