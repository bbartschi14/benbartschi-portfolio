import "./TableOfContents.css";
import { useEffect, useState, useRef } from "react";

interface SingleHeadingData {
  title: string;
  id: string;
}
const useHeadingElements = () => {
  const [headingElements, setHeadingElements] = useState<Array<SingleHeadingData>>([]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[id^="toc"]'));
    const mappedHeadings: Array<SingleHeadingData> = [];
    elements.forEach((heading, index) => {
      const { innerText: title, id } = heading;

      mappedHeadings.push({ id, title });
    });
    setHeadingElements(mappedHeadings);
  }, []);

  return { headingElements };
};

const useIntersectionObserver = (setActiveId: any) => {
  const headingElementsRef = useRef<any>({});

  useEffect(() => {
    const callback = (headings: any) => {
      headingElementsRef.current = headings.reduce((map: any, headingElement: any) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: any = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: any) => headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a: any, b: any) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-300px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll<HTMLElement>('[id^="toc"]'));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

interface Props {}

const TableOfContents = (props: Props) => {
  const [activeId, setActiveId] = useState();
  const { headingElements } = useHeadingElements();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents" className="TableOfContents-wrapper">
      {headingElements.map((heading, i) => (
        <a
          className={"TableOfContents-link" + (activeId == heading.id ? " selected" : "")}
          href={`#${heading.id}`}
          key={i}
          onClick={(e) => {
            e.preventDefault();
            console.log(`#${heading.id}`);
            document.querySelector(`#${heading.id}`)?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {/* substring call removed "toc" identifier from ids */}
          {heading.id.substring(3).replaceAll("_", " ")}
        </a>
      ))}
    </nav>
  );
};

export default TableOfContents;
