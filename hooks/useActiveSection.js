import { useEffect, useState } from 'react';

// Scroll-spy: returns the id of whichever section currently sits in the middle of the viewport.
export default function useActiveSection(sectionIds, initialId = sectionIds[0]) {
  const [activeId, setActiveId] = useState(initialId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Shrinks the detection zone to a thin band around the vertical centre, so only one section counts as active at a time.
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // The id list is static content, so re-running this effect on every render would only churn observers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
}
