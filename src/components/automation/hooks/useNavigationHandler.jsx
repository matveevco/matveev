import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useNavigationHandler = (scrollToSection) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = useCallback(
    (sectionId) => {
      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate(`/#${sectionId}`);
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    },
    [navigate, scrollToSection, location.pathname],
  );

  return handleNavigation;
};

export default useNavigationHandler;
