import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import './Qzone.css';
const QZone = () => {
    return (
        <div className='bg_qzone p-3 mt-4'>
            <h4>Q-Zone</h4>
            <div className='text-center py-4'>
                <img src={qzone1} alt="q-zone" />
                <img src={qzone2} alt="q-zone" />
                <img src={qzone3} alt="q-zone" />
            </div>
        </div>
    );
};

export default QZone;