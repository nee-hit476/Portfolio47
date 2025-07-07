import { useState } from 'react';
import { Eye, ExternalLink, Github, ChevronDown } from 'lucide-react';
import {projects} from "../../Data/Personal"
import {type Project} from "../../Data/Personal"

const ProjectInfoTip: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const toggleProjectExpansion = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Running':
        return 'bg-green-500';
      case 'Completed':
        return 'bg-blue-500';
      case 'In Progress':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const isExpanded = expandedProjects.has(project.id);
    
    return (
     <div className="bg-black-800/20 backdrop-blur-sm border border-gray-700/30 rounded-lg p-6 hover:bg-gray-700/30 transition-colors duration-300">
        <div 
          className="flex gap-4 cursor-pointer opacity-100"
          onClick={() => toggleProjectExpansion(project.id)}
        >
          {/* Project Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-28 bg-amber-700 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                  <span className="text-sm text-green-400">{project.status}</span>
                </div>
              </div>
              
              {/* Action Icons */}
              <div className="flex items-center gap-2">
                {project.viewLink && (
                  <button 
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye size={18} />
                  </button>
                )}
                {project.externalLink && (
                  <button 
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </button>
                )}
                {project.githubLink && (
                  <button 
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </button>
                )}
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                />
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technologies - Only show when expanded */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-gray-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full lg:w-[43.3333%] mx-auto p-2 lg:p-0 min-h-screen">
      
      <div className="space-y-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Show All Button */}
      {projects.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronDown 
              size={20} 
              className={`transform transition-transform ${showAll ? 'rotate-180' : ''}`}
            />
            <span>{showAll ? 'Show less' : 'Show all'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectInfoTip;