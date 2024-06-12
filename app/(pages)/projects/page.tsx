'use client'
import React, { useState } from "react";
// Assuming you'll create a TreeView component
import Image from "next/image";
import { projects } from "@/app";
import { useRouter } from "next/navigation";
import ProjectTips from "./ProjectsTips";
import GetProjectDetail from "./GetProjectDeatail";
import { arrow } from "@/public/assets/icons";
import {  TreeNodeData } from "./type";

const Projects = (): React.JSX.Element => {
  const [activeLabel, setActiveLabel] = useState<string>("");

  return (
    <div
      className="flex sm:flex-row flex-col gap-3 justify-start max-container"
      id="projects"
    >
      <section className="sm:border-r-2 overflow-scroll !text-green-900 sm:border-green-300 pr-1 md:pr-3 sm:!min-w-[200px] md:!min-w-fit">
        <TreeView
          projects={projects}
          activeLabel={activeLabel}
          setActiveLabel={setActiveLabel}
        />
      </section>
      <ProjectTips />
      <section className="md:w-[calc(100%-15rem)] w-[95vw] mx-auto h-full flex flex-col md:px-4 gap-5 pb-20 sm:overflow-scroll overflow-x-hidden">
        <GetProjectDetail setActiveLabel={setActiveLabel} />
      </section>
    </div>
  );
};

export default Projects;





// TreeNode.js



interface TreeNodeProps {
  value?: string;
  category?: string;
  id?: string;
  label: string;
  children?: React.ReactNode;
  isRoot?: boolean;
  firstChildren?: boolean;
  secondChildren?: boolean;
  activeLabel ?: string;
}

const TreeNode: React.FC<TreeNodeProps> = ({
  value,
  category,
  id,
  label,
  children,
  isRoot = false,
  firstChildren = false,
  secondChildren = false,
  activeLabel,
}) => {
  const hasChildren = React.Children.count(children) > 0;
  
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleToggle = () => {
    if (isRoot) {
      router.push("/projects");
    } else if (firstChildren) {
      router.push(`/projects?category=${value || ""}`);
    } else if (secondChildren) {
      router.push(`/projects?category=${category||''}&id=${id}`);
    }

    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    handleToggle();
  };
  const handleNormalClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`${firstChildren ? "border-l-4 border-green-300 pl-3" : ""}`}
    >
      <div
        className={`${
          isRoot ? "sm:mb-3" : ""
        } flex items-center sm:ml-2.5 cursor-pointer whitespace-nowrap`}
        style={{
          backgroundColor:
            !isRoot && activeLabel === label ? "rgb(74 222 128 / 0.3)" : "",
          borderRadius: "3px",
          padding: "2px 5px",
        }}
      >
        {hasChildren && (
          <span 
          onClick={handleNormalClick}
          
          >
            {isRoot ? (
              <Image
                width={16}
                height={16}
                className="w-4 sm:w-8 h-auto"
                src="/projects.gif"
                alt="icon"
                unoptimized
              />
            ) : isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "#87b158" }}
                x="0px"
                y="0px"
                width="22"
                height="22"
                viewBox="0 0 50 50"
              >
                <path d="M 3 4 C 1.347656 4 0 5.347656 0 7 L 0 33.09375 C 1.464844 25.296875 3.105469 16.550781 3.1875 16.125 C 3.695313 13.535156 5.648438 12 8.4375 12 L 47 12 L 47 11 C 47 9.347656 45.652344 8 44 8 L 18.03125 8 C 17.753906 7.898438 17.183594 6.992188 16.875 6.5 C 16.105469 5.273438 15.316406 4 14 4 Z M 8.4375 14 C 7.15625 14 5.5625 14.449219 5.15625 16.53125 C 5.027344 17.179688 1.132813 37.910156 0 43.9375 L 0 44 C 0 45.652344 1.347656 47 3 47 L 42 47 C 43.621094 47 44.945313 45.703125 45 44.09375 L 49.96875 17.1875 L 50 17 C 50 15.347656 48.652344 14 47 14 Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 72 72"
                style={{ fill: "#87b158" }}
              >
                <path d="M 19 13 C 14.037 13 10 17.038 10 22 L 10 49 C 10 49.217 10.017203 49.431531 10.033203 49.644531 L 15.496094 35.582031 C 17.286094 30.976031 21.636125 28 26.578125 28 L 59.988281 28 C 60.673281 28 61.343 28.086703 62 28.220703 L 62 26 C 62 21.038 57.963 17 53 17 L 32.753906 17 C 32.526906 17 32.307813 16.923203 32.132812 16.783203 L 29.869141 14.974609 C 28.280141 13.701609 26.283094 13 24.246094 13 L 19 13 z M 26.578125 32 C 23.299125 32 20.412609 33.97525 19.224609 37.03125 L 12.263672 54.947266 C 13.914672 56.814266 16.318 58 19 58 L 53.1875 58 C 56.5105 58 59.437531 55.998438 60.644531 52.898438 L 65.591797 40.173828 C 66.308797 38.326828 66.070172 36.247328 64.951172 34.611328 C 64.770172 34.346328 62.886281 32 59.988281 32 L 26.578125 32 z"></path>
              </svg>
            )}
          </span>
        )}
        <span
          className={`${
            isRoot
              ? "ml-2 text-sm sm:text-xl lg:text-2xl text-green-800 dark:text-green-500"
              : "ml-2 text-xs sm:text-sm lg:text-md dark:text-slate-300"
          } ${firstChildren && "font-semibold flex"} `}
        >
          {secondChildren ? (
            <span onClick={(e) => handleClick(e)} className="flex">
              <Image width={14} height={14} src={arrow} alt="arrow" />
              <span className="mx-[2px] disable-selection">{label} </span>
            </span>
          ) : (
            <span
              className="mx-[2px] disable-selection"
              onDoubleClick={(e) => handleClick(e)}
            >
              {label}
            </span>
          )}
        </span>
      </div>
      {isRoot
        ? !isOpen && <div className="ml-8">{children}</div>
        : isOpen && <div className="ml-8">{children}</div>}
    </div>
  );
};

interface TreeViewProps {
  projects: TreeNodeData[];
  activeLabel: string;
  setActiveLabel: React.Dispatch<React.SetStateAction<string>>;
}

const TreeView: React.FC<TreeViewProps> = ({
  projects,
  activeLabel,
}) => {
  return (
    <div className="lg:p-2">
      <TreeNode label="All Projects" isRoot={true}>
        {projects.map((project) => (
          <TreeNode
            activeLabel={activeLabel}
            label={project.label}
            value={project.value}
            key={project._id}
            firstChildren={true}
          >
            {project.projects.map((p) => (
              <TreeNode
                activeLabel={activeLabel}
                id={p._id}
                category={project.value}
                label={p.title}
                secondChildren={true}
                key={p._id}
              />
            ))}
          </TreeNode>
        ))}
      </TreeNode>
    </div>
  );
};
