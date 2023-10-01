import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
        width={400}
        height={200}
      />
      <div className="p-4">
        <h2 className="text-xl mb-2">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
      </div>
    </div>
  );
}
