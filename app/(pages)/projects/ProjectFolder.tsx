import React, { useState } from "react";
import folder1 from "@/public/folder1.svg";
import folder2 from "@/public/folder2.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TreeNodeData } from "./type";



interface ProjectFolderProps {
  projects: TreeNodeData[];
}

const ProjectFolder: React.FC<ProjectFolderProps> = ({ projects }) => {
  const [open, setOpen] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpen(index);
  };

  const router = useRouter();

  return (
    <div>
      <div className="flex gap-5 flex-wrap justify-center sm:justify-start items-center">
        {projects.map((item, index) => (
          <div
            className={`flex flex-col justify-center items-center p-2 hover:bg-green-400/50 cursor-pointer ${
              open === index ? "active bg-green-400/50 rounded-md " : ""
            }`}
            onClick={() => handleClick(index)}
            key={index}
            onDoubleClick={() => {
              router.push(`/projects?category=${item.value}`);
            }}
          >
            <Image
              
              src={open === index ? folder2 : folder1}
              alt=""
              className="w-24 sm:w-28 md:w-32"
            />
            <p className="text-green-950 dark:text-slate-300 font-medium sm:text-base text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFolder;
