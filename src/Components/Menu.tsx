import React from 'react';
import { Parallax } from 'react-parallax';
import d from '../images/4.jpg';

const Menu = () => (
    <Parallax className='image'  bgImage={d} strength={800}>
       <div className='content'>
        <span className='img-txt'>a trip to space</span>
       </div>
    </Parallax>
);
export default Menu;