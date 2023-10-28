import React from 'react';
import { Parallax } from 'react-parallax';
import a from '../images/1.jpg';

const Home = () => (
    <Parallax className='image' bgImage={a} strength={200}>
      <div className='content'>
        <span className='img-txt'>a trip to space</span>
       </div>
    </Parallax>
);
export default Home;