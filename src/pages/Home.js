import '../App.css';

import { Link } from 'react-router-dom';

import Carousel from './components/carousel';

function Home() {
  return (
    <div className='content'>
        <div className='main-content'>
            <div className='carosel'>
            <div className='title'>
                Latest Projects!
            </div>
            <div className='spacer'></div>
            <div className='carousel'><Carousel></Carousel></div>
            </div>
        </div>
    </div>
  );
}

export default Home;
