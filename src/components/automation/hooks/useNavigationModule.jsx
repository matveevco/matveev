import smoothScrollHandler from "./useSmoothScrollHandler";

const useNavigationModule = (smoothScrollInstance) => {
  if (!smoothScrollInstance) {
    console.error("SmoothScroll instance is not found.");
    return;
  }

  const cleanUpHandler = smoothScrollHandler(smoothScrollInstance);

  return () => {
    if (cleanUpHandler) {
      cleanUpHandler();
    }
  };
};

export default useNavigationModule;
