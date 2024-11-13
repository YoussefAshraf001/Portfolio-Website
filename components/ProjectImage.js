import React, { useState, useEffect, useRef } from "react";

const ProjectCard = ({ project }) => {
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false); // Track completion
  const progressRef = useRef(null);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  // Animate progress bar once it's in view
  useEffect(() => {
    if (isInView && !project.imageUrl) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress < 85) {
          currentProgress += 1;
          setProgress(currentProgress);
        } else {
          setIsCompleted(true); // Mark as completed
          clearInterval(interval);
        }
      }, 110); // Adjust the speed of the animation
      return () => clearInterval(interval);
    }
  }, [isInView, project.imageUrl]);

  return (
    <div
      className={`project-card ${
        !project.imageUrl ? "bg-black rounded-t-lg" : "rounded-lg"
      }`}
    >
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          className="object-cover h-[280px] w-full rounded-t-lg"
          alt={project.title}
        />
      ) : (
        <div
          ref={progressRef}
          className="relative h-[280px] w-full bg-black rounded-t-lg overflow-hidden"
        >
          <div
            className="absolute flex items-center justify-center top-1/2 left-4 transform -translate-y-1/2 h-[15px] bg-blue-500 rounded-full text-center text-white font-bold transition-all duration-500"
            style={{
              width: `${isInView ? progress : 0}%`,
            }}
          >
            {isCompleted && `${progress}% Done`}{" "}
            {/* Only show when completed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
