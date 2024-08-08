import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useNavigationHandler = (scrollToSection) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = useCallback(
    (sectionId) => {
      if (pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate(`/#${sectionId}`);
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    },
    [navigate, pathname, scrollToSection],
  );

  return handleNavigation;
};

export default useNavigationHandler;
