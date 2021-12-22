import './project_object.css';

import images from './imgs/index';

const ProjectObject = ({project}) => {
    
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
                    <img src={images[image]}></img>
                </div>
                <div className='source_code'>
                    <a href={source} target="_blank">View Source Code</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectObject;