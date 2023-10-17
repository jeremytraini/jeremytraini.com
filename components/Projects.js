import React from 'react';

const ProjectCard = ({ project, index }) => {
  const isOdd = index % 2 == 0;

  return (
    <div className="flex mb-4 items-center shadow-md rounded-xl">
      {isOdd ? (
        <>
          <ProjectImage src={project.imageUrl} />
          <ProjectDetails project={project} />
        </>
      ) : (
        <>
          <ProjectDetails project={project} />
          <ProjectImage src={project.imageUrl} />
        </>
      )}
    </div>
  );
}

const ProjectImage = ({ src }) => {
  return (
    <div className="flex-shrink-0 w-1/3">
      <img src={src} alt="Project Image" className="rounded-lg shadow-lg w-full h-48 object-cover" />
    </div>
  );
}

const ProjectDetails = ({ project }) => {
  return (
    <div className="ml-6 w-2/3">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <h3 className="text-md text-gray-600 mb-2">{project.subtitle}</h3>
      <p className="text-sm text-gray-800 mb-2">{project.description}</p>
      <p className="text-sm text-gray-600 mb-2">Technologies: {project.technologies.join(', ')}</p>
      <a href={project.projectLink} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
}

const Projects = ({ projects }) => {
  return (
    <div className="p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

export default Projects;