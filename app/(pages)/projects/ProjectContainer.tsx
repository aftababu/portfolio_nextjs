"use client";
import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import Image from "next/image";
import Loader from "@/app/components/ui/Loader";
import Modal from "@/app/components/ui/Modal";
import VisitProjectBtn from "@/app/components/ui/VisitProjectBtn";
import ShareBtn from "@/app/components/ui/ShareBtn";
import { Project, TreeNodeData } from "./type";

interface ProjectContainerProps {
  projects: TreeNodeData;
  category: string;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  projects
 
}) => {
  const [projectDetailState, setProjectDetailState] = useState<Project | null>(
    null
  );

  const handleClick = (id: string) => {
    const projectDetail = projects.projects.find((p) => p._id === id);
    if (projectDetail) {
      setProjectDetailState(projectDetail);
    }
  };

  const [imgLoad, setImgLoading] = useState(true);

  if (!projects) return <Loader />;

  return (
    <>
      <Modal>
        <div className="grid-cols-2 sm:grid lg:grid-cols-3 sm:mr-2 justify-center xs:flex flex-wrap block">
          {projects.projects.map((item) => (
            <div
              key={item._id}
              className="hover:scale-105 transition-all cursor-pointer mx-1 mt-3 min-w-[100px] max-w-[300px] sm:min-w-[200px] sm:max-w-[400px] flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(21, 212, 53, 0.04)] dark:bg-green-950 sm:shrink-0 sm:grow sm:basis-0"
            >
              <Modal.Open
                opens={"projectModal"}
                onClick={() => handleClick(item._id)}
              >
                <div className="relative">
                  <Image
                  width={400}
                  height={200}
                    className={`rounded-t-lg last:transition-opacity duration-500 ${
                      imgLoad ? "w-full bg-green-100/50 rounded-md opacity-0  shadow-md p-4 animate-pulse" : "opacity-100"
                    }`}
                    src={item.images[0].url}
                    onLoad={() => setImgLoading(false)}
                    alt="Skyscrapers"
                  />

                  <div className="absolute bottom-0 w-full px-3 md:py-1 lg:py-2 bg-gradient-to-b from-green-200/10 to-gray-950/60">
                    <p className="text-white font-semibold text-md md:text-xl ">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Modal.Open>
              <hr className="bg-green-950" />
              <div className="justify-around items-center flex whitespace-pre px-2">
                <ShareBtn className={"text-white"} url={item.projectUrl} />
                <VisitProjectBtn
                  className={"text-white"}
                  url={item.projectUrl}
                />
              </div>
            </div>
          ))}
        </div>
        <Modal.Window name={"projectModal"}>
          {!projectDetailState ? (
            <Loader />
          ) : (
            <div className="min-w-[80vw] max-w-[90vw] overflow-scroll overflow-x-hidden h-fit md:h-[85dvh]">
              <ProjectDetail modal={true} projectDetail={projectDetailState} />
            </div>
          )}
        </Modal.Window>
      </Modal>
    </>
  );
};

export default ProjectContainer;
