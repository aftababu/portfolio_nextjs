"use client";
import ProjectDetail from "./ProjectDetail";
import ProjectContainer from "./ProjectContainer";
import ProjectFolder from "./ProjectFolder";
import { useSearchParams } from "next/navigation";
import { projects } from "@/app";
import { useState, useEffect } from "react";
import PageNotFound from "@/app/not-found";

interface GetProjectDetailProps {
  setActiveLabel: (label: string) => void;
}

const GetProjectDetail: React.FC<GetProjectDetailProps> = ({
  setActiveLabel,
}) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const id = searchParams.get("id");

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (id) {
      setModal(true); // Assuming you want the modal to open when there is an id
    } else {
      setModal(false); // Close the modal if there is no id
    }
  }, [id]);

  const filteredContent = () => {
    if (category && id) {
      const project = projects.find((project) => project.value === category);
      if (project) {
        const projectDetail = project.projects.find((p) => p._id === id);
        if (projectDetail) {
          setActiveLabel(projectDetail.title || "");

          return <ProjectDetail projectDetail={projectDetail} modal={modal} />;
        } else {
          return <PageNotFound text="no project found with that id" />; // Handle the case where the project is not found
        }
      }
    } else if (category) {
      const project = projects.find((project) => project.value === category);
      if (project) {
        setActiveLabel(project.label || "");
        return <ProjectContainer projects={project} category={category} />;
      }
    }
    setActiveLabel("");
    return <ProjectFolder projects={projects} />;
  };

  return filteredContent();
};

export default GetProjectDetail;
