import { useEffect, useMemo, startTransition } from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "./NavigationContext";

const useRouteState = () => {
  const location = useLocation();
  const { setIsApp } = useNavigation();

  const isAppRoute = useMemo(
    () => location.pathname === "/",
    [location.pathname],
  );
  const isArticleRoute = useMemo(
    () => location.pathname.startsWith("/article/"),
    [location.pathname],
  );
  const isNoMatchRoute = useMemo(
    () => !isAppRoute && !isArticleRoute,
    [isAppRoute, isArticleRoute],
  );

  useEffect(() => {
    setIsApp(isAppRoute || isNoMatchRoute);
  }, [isAppRoute, isNoMatchRoute, setIsApp]);

  useEffect(() => {
    startTransition(() => {
      window.scrollTo(0, 0);
    });
  }, [location.pathname]);
};

export default useRouteState;
