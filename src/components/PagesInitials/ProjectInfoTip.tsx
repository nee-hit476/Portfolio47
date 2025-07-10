import { useState, useCallback, useMemo, memo, useRef } from 'react';
import { Eye, ExternalLink, Github, ChevronDown } from 'lucide-react';
import {projects} from "../../Data/Personal"
import {type Project} from "../../Data/Personal"
import { easeInOut, motion, AnimatePresence } from 'framer-motion';

const ProjectInfoTip: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const expandedProjectsRef = useRef<Set<string>>(new Set());

  const visibleProjects = useMemo(() => 
    showAll ? projects : projects.slice(0, 2), 
    [showAll]
  );

  const toggleProjectExpansion = useCallback((projectId: string) => {
    const isExpanded = expandedProjectsRef.current.has(projectId);
    
    if (isExpanded) {
      expandedProjectsRef.current.delete(projectId);
    } else {
      expandedProjectsRef.current.add(projectId);
    }
    
    // Find the technology section and chevron for this project
    const techSection = document.querySelector(`[data-project-id="${projectId}"] .tech-section`) as HTMLElement | null;
    const chevron = document.querySelector(`[data-project-id="${projectId}"] .chevron-icon`) as HTMLElement | null;
    
    if (techSection && chevron) {
      if (isExpanded) {
        // Collapse
        techSection.style.height = techSection.scrollHeight + 'px';
        requestAnimationFrame(() => {
          techSection.style.height = '0px';
          techSection.style.opacity = '0';
        });
        chevron.style.transform = 'rotate(0deg)';
      } else {
        // Expand
        techSection.style.height = '0px';
        techSection.style.opacity = '0';
        techSection.style.display = 'block';
        requestAnimationFrame(() => {
          techSection.style.height = techSection.scrollHeight + 'px';
          techSection.style.opacity = '1';
        });
        chevron.style.transform = 'rotate(180deg)';
      }
    }
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

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

  const ProjectCard: React.FC<{ project: Project; index: number }> = memo(({ project, index }) => {
    const handleCardClick = useCallback(() => {
      toggleProjectExpansion(project.id);
    }, [project.id]);

    const handleButtonClick = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
    }, []);
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: easeInOut 
        }}
        layout
        className="bg-black-800/20 backdrop-blur-sm border border-gray-700/30 rounded-lg p-6 hover:bg-gray-700/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-900/20"
        data-project-id={project.id}
      >
        <motion.div 
          className="flex flex-col lg:flex-row gap-4 cursor-pointer opacity-100"
          onClick={handleCardClick}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {/* Project Image */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-40 h-30 rounded-lg overflow-hidden">
              {<div dangerouslySetInnerHTML={{ __html: project.desc }} />}
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <motion.h3 
                  className="text-sm font-semibold text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <div className="flex items-center gap-1">
                  <motion.div 
                    className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1] 
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-sm text-green-400">{project.status}</span>
                </div>
              </div>
              
              {/* Action Icons */}
              <div className="flex items-center">
                {project.viewLink && (
                  <motion.button 
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={handleButtonClick}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Eye size={18} />
                  </motion.button>
                )}
                {project.externalLink && (
                  <motion.button 
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={handleButtonClick}
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                )}
                {project.githubLink && (
                  <motion.button 
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={handleButtonClick}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github size={18} />
                  </motion.button>
                )}
                <motion.div
                  className="chevron-icon"
                  style={{ 
                    transition: 'transform 0.3s ease-in-out',
                    transform: 'rotate(0deg)'
                  }}
                >
                  <ChevronDown 
                    size={20} 
                    className="text-gray-400"
                  />
                </motion.div>
              </div>
            </div>

            <motion.p 
              className="text-gray-300 text-sm leading-relaxed"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Technologies - Always rendered but hidden/shown via CSS */}
        <div 
          className="tech-section mt-4 pt-4 border-t border-gray-700 overflow-hidden"
          style={{ 
            height: '0px',
            opacity: '0',
            display: 'none',
            transition: 'height 0.4s ease-in-out, opacity 0.4s ease-in-out'
          }}
        >
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
                style={{
                  transform: 'scale(1)',
                  transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.backgroundColor = 'rgb(75, 85, 99)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgb(55, 65, 81)';
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }, (prevProps, nextProps) => {
    // Only re-render if project data changes, not expansion state
    return (
      prevProps.project.id === nextProps.project.id &&
      prevProps.index === nextProps.index
    );
  });

  return (
    <div className="w-full lg:w-[43.3333%] mx-auto p-2 lg:p-0 min-h-screen">
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show All Button */}
      {projects.length > 2 && (
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={toggleShowAll}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
            >
              <ChevronDown size={20} />
            </motion.div>
            <motion.span
              key={showAll ? 'less' : 'more'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {showAll ? 'Show less' : 'Show all'}
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectInfoTip;