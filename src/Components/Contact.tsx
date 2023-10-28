import React from 'react';
import { Parallax } from 'react-parallax';
import c from '../images/3.jpg';

const Contact = () => (
    <Parallax className='image'  bgImage={c} strength={800}>
       <div className='content'>
        <span className='img-txt'>a trip to space</span>
       </div>
    </Parallax>
);
export default Contact;