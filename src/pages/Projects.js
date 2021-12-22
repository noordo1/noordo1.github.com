import '../App.css';

import './projects.css'

import ProjectObject from './components/project_object';

import projects from './components/data/projects.json';

function Projects() {
  return (
    <div className='content'>
        <div className='main-content'>
            <div className='title'>
                Projects
            </div>
              <div class="grid-container"> {
              projects.map(project => {
                if (project.front === 'true') {
                    return (
                        <div>
                            <ProjectObject project={project} key={project._key} className='grid-element' />
                        </div>
                    )
                }
            }) }
              </div> 
          </div>
    </div>
  );
}

export default Projects;
