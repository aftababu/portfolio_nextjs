import React, { FC, useState } from "react";
import { socialLinks } from "..";
import Image from "next/image";

const SocialIcons:FC = () => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <div className="fixed bottom-0 right-0 z-50">
      <div className={`flex flex-col justify-center items-center gap-3 transition-all origin-bottom  ${showIcon ? "scale-0" : ""}`}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
          >
            <Image width={32} height={32} className="w-8" src={link.iconUrl} alt={link.name} />
          </a>
        ))}
      </div>

      <svg
        onClick={() => setShowIcon(!showIcon)}
        
        className={`w-8 sm:w-12 h-auto cursor-pointer transition-all text-green-700 ${showIcon ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.722 5.5a8.226 8.226 0 0 1 8.222 8.222v8.222h-8.222A8.226 8.226 0 0 1 5.5 13.722h0A8.226 8.226 0 0 1 13.722 5.5m20.556 0a8.226 8.226 0 0 1 8.222 8.222h0a8.226 8.226 0 0 1-8.222 8.222h-8.222v-8.222A8.226 8.226 0 0 1 34.278 5.5M13.722 26.056h8.222v8.222a8.226 8.226 0 0 1-8.222 8.222h0A8.226 8.226 0 0 1 5.5 34.278h0a8.226 8.226 0 0 1 8.222-8.222m12.334 0h8.222a8.226 8.226 0 0 1 8.222 8.222h0a8.226 8.226 0 0 1-8.222 8.222h0a8.226 8.226 0 0 1-8.222-8.222z"
        />
      </svg>
    </div>
  );
};

export default SocialIcons;
