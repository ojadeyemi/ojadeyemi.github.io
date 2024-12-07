import React from "react";
import { useNavigate } from "react-router-dom";

const ScrollToTopLink: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate("/projects"); // Navigate to the projects page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
  };

  return (
    <a
      href="/projects"
      onClick={handleClick}
      className="ml-auto text-right text-[10px] font-medium text-blue-500 transition hover:text-blue-700 hover:underline focus:text-blue-700 active:text-blue-800"
    >
      See more...
    </a>
  );
};

export default ScrollToTopLink;
