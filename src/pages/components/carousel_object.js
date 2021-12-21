import './carousel_object.css';

import img from './default.jpg'

const CarouselObject = ({project}) => {
    const {title, category, image, source} = project;
    return (
        <div className='container'>
            <div className='inner_con'>
                <div className='category'>
                    {category}
                </div>
                <div className='name'>
                    {title}
                </div>
                <div className='image'>
                    <img src={img}></img>
                </div>
                <div className='source_code'>
                    <a href='https://www.google.com'>View Source Code</a>
                </div>
            </div>
        </div>
    );
}

export default CarouselObject;