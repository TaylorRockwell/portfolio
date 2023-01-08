import React from 'react';
import YourForum from '../docs/your-forum.png';
import TechBlog from '../docs/tech-blog.png';
import FitnessTracker from '../docs/fitness-tracker.png';

// Render project data
const Project = ({ title, githubLink, deploymentLink, imageLink }) => {
  return (
    <div class='flex-row justify-space-around'>
      <div class='card'>
        <div class='card-header'>{title} <h3>Your Forum</h3>
          <div class='card-body'>{imageLink} <img src={YourForum} alt="your-forum"></img>
            <div class='card-footer'>{deploymentLink} <a href="https://young-journey-50275.herokuapp.com/">Deployment</a><br></br>
              {githubLink} <a href="https://github.com/TaylorRockwell/your-forum">Github Repository</a>
            </div>
          </div>
        </div>
      </div>
      <div class='card'>
        <div class='card-header'>{title} <h3>Tech Blog</h3>
          <div class='card-body'>{imageLink} <img src={TechBlog} alt="tech-blog"></img>
            <div class='card-footer'>{deploymentLink} <a href="https://shielded-tundra-04335.herokuapp.com/">Deployment</a><br></br>
              {githubLink} <a href="https://github.com/TaylorRockwell/tech-blog">Github Repository</a>
            
            </div>
          </div>
        </div>
      </div>
      <div class='card'>
        <div class='card-header'>{title} <h3>Fitness Tracker</h3>
          <div class='card-body'>{imageLink} <img src={FitnessTracker} alt="fitness-tracker"></img>
            <div class='card-footer'>{deploymentLink} <a href="https://murmuring-journey-98944.herokuapp.com/?id=63ba02463ea76c0016339687">Deployment</a><br></br>
              {githubLink} <a href="https://github.com/TaylorRockwell/fitness-tracker">Github Repository</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>




  );
};

export default Project;
