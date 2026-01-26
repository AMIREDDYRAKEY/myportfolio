import { useEffect } from "react";
import ReactGA from "react-ga4";

const useSectionTracking = (sectionIds) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ReactGA.event({
              category: "Section View",
              action: "Viewed Section",
              label: entry.target.id,
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
};

export default useSectionTracking;
