import React from 'react';
import { Parallax } from 'react-parallax';
import b from '../images/2.jpg';

const Team = () => (
    <Parallax className='image'  bgImage={b}  strength={800}>
       <div className='content'>
        <span className='img-txt'>a trip to space</span>
       </div>
    </Parallax>
);
export default Team;