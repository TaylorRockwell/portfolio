import Project from './Project';
import React from 'react';

// Render Portfolio
const Portfolio = () => {
  const title = "";
  const githubLink = "";
  const deploymentLink = "";
  const imageLink = "";

  return (
    <div>
      <Project title={title} githubLink={githubLink} deploymentLink={deploymentLink} imageLink={imageLink} />
    </div>
  );
};

export default Portfolio;
