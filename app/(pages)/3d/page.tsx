"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import islanAudio from "@/public/assets/islanAudio.mp3";
import { soundoff, soundon } from "@/public/assets/icons";
import HomeInfo from "@/app/components/HomeInfo";
import Loader from "@/app/components/Loader";
import Island from "./models/island";
import WalkingMan from "./models/WalkingMan";
import Image from "next/image";

const Home: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(islanAudio) : undefined
  );
  if (audioRef.current) {
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
  }

  const [isPlaying, setIsPlaying] = useState(true);
  // eslint-disable-next-line
  const [currentAnimation, setCurrentAnimation] = useState("Walk");
  useEffect(() => {
    const audio = audioRef?.current;
    if (isPlaying) {
      audio?.play();
    }
    return () => {
      audio?.pause();
    };
  }, [isPlaying]);
  const [isRotating, setIsRotating] = useState(false);
  const [currentState, setCurrentState] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -3, -50];
    const rotation = [0.2, 0, 0];
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        screenScale = [1.75, 1.75, 1.75];
      } else {
        screenScale = [1.9, 1.9, 1.9];
      }
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustWalkingManForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [1, -4, -2.5];
    const rotation = [0.2, 2, 0];
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        screenScale = [0.3, 0.3, 0.3];
      } else {
        screenScale = [0.5, 0.5, 0.5];
      }
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [walkingManScale, walkingManPosition, walkingManRotation] =
    adjustWalkingManForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        <div className="text-red-600">under construction</div>
        {currentState && <HomeInfo currentState={currentState} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[-10, -10, -10]} />
          <spotLight position={[10, 10, 10]} />
          <hemisphereLight intensity={0.5} />

          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentState={setCurrentState}
            currentState={currentState}
            setCurrentAnimation={setCurrentAnimation}
          />

          <WalkingMan
            scale={walkingManScale}
            position={walkingManPosition}
            rotation={walkingManRotation}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <Image
          src={isPlaying ? soundoff : soundon}
          alt="sound"
          width={40}
          height={40}
          className="cursor-pointer object-contain"
          onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>
    </section>
  );
};

export default Home;
